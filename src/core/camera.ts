import {
  degToRad
} from "@/modules";
import {
  Matrix4
} from "./math";
import ShaderProgram from "./shaderProgram";
import Transformation from "./transformation";

class Camera {
  constructor(gl: WebGLRenderingContext, fov: number = 45, near: number = 0.1, far: number = 100.0) {

    this.projection = new Float32Array(16);

    const ratio = gl.canvas.width / gl.canvas.height;
    Matrix4.perspective(this.projection, fov, ratio, near, far);

    this.transform = new Transformation(); //Setup transform to control the position of the camera
    this.viewMatrix = new Float32Array(16); //Cache the matrix that will hold the inverse of the transform.

    this.mode = Camera.MODE_ORBIT; //Set what sort of control mode to use.
  }

  transform: Transformation;
  projection: Float32Array;
  viewMatrix: Float32Array;
  mode: number;

  static MODE_FREE = 0; //Allows free movement of position and rotation, basicly first person type of camera
  static MODE_ORBIT = 1; //Movement is locked to rotate around the origin, Great for 3d editors or a single model viewer

  panX(v: number) {
    if (this.mode == Camera.MODE_ORBIT) return; // Panning on the X Axis is only allowed when in free mode
    this.updateViewMatrix();
    this.transform.position.x += this.transform.right[0] * v;
    this.transform.position.y += this.transform.right[1] * v;
    this.transform.position.z += this.transform.right[2] * v;
  }

  panY(v: number) {
    this.updateViewMatrix();
    this.transform.position.y += this.transform.up[1] * v;
    if (this.mode == Camera.MODE_ORBIT) return; //Can only move up and down the y axix in orbit mode
    this.transform.position.x += this.transform.up[0] * v;
    this.transform.position.z += this.transform.up[2] * v;
  }

  panZ(v: number) {
    this.updateViewMatrix();
    if (this.mode == Camera.MODE_ORBIT) {
      this.transform.position.z += v; //orbit mode does translate after rotate, so only need to set Z, the rotate will handle the rest.
    } else {
      //in freemode to move forward, we need to move based on our forward which is relative to our current rotation
      this.transform.position.x += this.transform.forward[0] * v;
      this.transform.position.y += this.transform.forward[1] * v;
      this.transform.position.z += this.transform.forward[2] * v;
    }
  }

  //To have different modes of movements, this function handles the view matrix update for the transform object.
  updateViewMatrix() {
    //Optimize camera transform update, no need for scale nor rotateZ
    if (this.mode == Camera.MODE_FREE) {
      this.transform.matView.reset()
        .vtranslate(this.transform.position)
        .rotateX(degToRad(this.transform.rotation.x))
        .rotateY(degToRad(this.transform.rotation.y));

    } else {
      this.transform.matView.reset()
        .rotateX(degToRad(this.transform.rotation.x))
        .rotateY(degToRad(this.transform.rotation.y))
        .vtranslate(this.transform.position);

    }

    this.transform.updateDirection();

    //Cameras work by doing the inverse transformation on all meshes, the camera itself is a lie :)
    Matrix4.invert(this.viewMatrix, this.transform.matView.matrix);

    return this.viewMatrix;
  }
}

class CameraController {
  constructor(gl: WebGLRenderingContext, camera: Camera) {
    const self = this;
    const box = (gl.canvas as HTMLCanvasElement).getBoundingClientRect();
    this.canvas = gl.canvas as HTMLCanvasElement; //Need access to the canvas html element, main to access events
    this.camera = camera; //Reference to the camera to control

    this.rotateRate = -300; //How fast to rotate, degrees per dragging delta
    this.panRate = 5; //How fast to pan, max unit per dragging delta
    this.zoomRate = 200; //How fast to zoom or can be viewed as forward/backward movement

    this.offsetX = box.left; //Help calc global x,y mouse cords.
    this.offsetY = box.top;

    this.initX = 0; //Starting X,Y position on mouse down
    this.initY = 0;
    this.prevX = 0; //Previous X,Y position on mouse move
    this.prevY = 0;

    this.canvas.addEventListener("mouseup", this.onUpHandler);
    this.canvas.addEventListener("mousemove", this.onMoveHandler);

    this.canvas.addEventListener("mousedown", function (e) {
      self.onMouseDown(e);
    }); //Initializes the up and move events
    this.canvas.addEventListener("mousewheel", function (e) {
      self.onMouseWheel(e);
    }); //Handles zoom/forward movement
  }

  canvas: HTMLCanvasElement;
  camera: Camera;
  rotateRate: number; //How fast to rotate, degrees per dragging delta
  panRate: number; //How fast to pan, max unit per dragging delta
  zoomRate: number; //How fast to zoom or can be viewed as forward/backward movement
  offsetX: number; //Help calc global x,y mouse cords.
  offsetY: number;
  initX: number; //Starting X,Y position on mouse down
  initY: number;
  prevX: number; //Previous X,Y position on mouse move
  prevY: number;

  //Transform mouse x,y cords to something useable by the canvas.
  getMouseVec2(e: MouseEvent) {
    return {
      x: e.pageX - this.offsetX,
      y: e.pageY - this.offsetY
    };
  }

  onUpHandler(e: MouseEvent) {
    this.onMouseUp(e);
  };
  onMoveHandler(e: MouseEvent) {
    this.onMouseMove(e);
  }

  //Begin listening for dragging movement
  onMouseDown(e: MouseEvent) {
    this.initX = this.prevX = e.pageX - this.offsetX;
    this.initY = this.prevY = e.pageY - this.offsetY;

    this.canvas.addEventListener("mouseup", this.onUpHandler);
    this.canvas.addEventListener("mousemove", this.onMoveHandler);
  }

  //End listening for dragging movement
  onMouseUp(e: MouseEvent) {
    this.canvas.removeEventListener("mouseup", this.onUpHandler);
    this.canvas.removeEventListener("mousemove", this.onMoveHandler);
  }

  onMouseWheel(e: any) {
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); //Try to map wheel movement to a number between -1 and 1
    this.camera.panZ(delta * (this.zoomRate / this.canvas.height)); //Keep the movement speed the same, no matter the height diff
  }

  onMouseMove(e: MouseEvent) {
    var x = e.pageX - this.offsetX, //Get X,y where the canvas's position is origin.
      y = e.pageY - this.offsetY,
      dx = x - this.prevX, //Difference since last mouse move
      dy = y - this.prevY;

    //When shift is being helt down, we pan around else we rotate.
    if (!e.shiftKey) {
      this.camera.transform.rotation.y += dx * (this.rotateRate / this.canvas.width);
      this.camera.transform.rotation.x += dy * (this.rotateRate / this.canvas.height);
    } else {
      this.camera.panX(-dx * (this.panRate / this.canvas.width));
      this.camera.panY(dy * (this.panRate / this.canvas.height));
    }

    this.prevX = x;
    this.prevY = y;
  }
}

export {
  Camera,
  CameraController
}