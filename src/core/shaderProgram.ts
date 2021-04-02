import Modal from "./modal";

export default class ShaderProgram {
  constructor(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {

    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vsSource) as WebGLShader;
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fsSource) as WebGLShader;

    this.createShaderProgram(gl, fragmentShader, vertexShader);

    this.gl = gl;
  }

  gl: WebGLRenderingContext | null = null;
  positionIndex: number | null = null;
  normalIndex: number | null = null;
  uvIndex: number | null = null;

  modalMatrix: WebGLUniformLocation | null = null;
  perspective: WebGLUniformLocation | null = null;
  cameraMatrix: WebGLUniformLocation | null = null;
  mainTexture: WebGLUniformLocation | null = null;

  ambientLight: WebGLUniformLocation | null = null;
  lightDirection: WebGLUniformLocation | null = null;
  vertexShader: WebGLShader | null = null;
  fragmentShader: WebGLShader | null = null;
  shaderProgram: WebGLProgram | null = null;

  createShaderProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): void {

    const program = gl.createProgram() as WebGLProgram;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Error creating shader program.", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      throw new Error('Failed to link shaderProgram');
    }

    this.positionIndex = gl.getAttribLocation(program, 'position');
    this.normalIndex = gl.getAttribLocation(program, 'normal');
    this.uvIndex = gl.getAttribLocation(program, 'uv');

    this.modalMatrix = gl.getUniformLocation(program, 'uMVMatrix') as WebGLUniformLocation;
    this.perspective = gl.getUniformLocation(program, 'uPMatrix') as WebGLUniformLocation;
    this.cameraMatrix = gl.getUniformLocation(program, 'uCameraMatrix') as WebGLUniformLocation;
    this.mainTexture = gl.getUniformLocation(program, 'uMainTexture') as WebGLUniformLocation;

    // this.ambientLight = gl.getUniformLocation(program, 'ambientLight') as WebGLUniformLocation;
    // this.lightDirection = gl.getUniformLocation(program, 'lightDirection') as WebGLUniformLocation;

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    this.shaderProgram = program;

    //Can delete the shaders since the program has been made.
    gl.detachShader(program, vertexShader); //TODO, detaching might cause issues on some browsers, Might only need to delete.
    gl.detachShader(program, fragmentShader);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
  }


  createShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type) as WebGLShader;

    // Send the source to the shader object
    gl.shaderSource(shader, source);

    // Compile the shader program
    gl.compileShader(shader);

    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  activate() {
    (this.gl as WebGLRenderingContext).useProgram(this.shaderProgram);
    return this;
  }

  deactivate() {
    (this.gl as WebGLRenderingContext).useProgram(null);
    return this;
  }

  setPerspective(matData: Float32Array) {
    (this.gl as WebGLRenderingContext).uniformMatrix4fv(this.perspective, false, matData);
    return this;
  }

  setModalMatrix(matData: Float32Array) {
    (this.gl as WebGLRenderingContext).uniformMatrix4fv(this.modalMatrix, false, matData);
    return this;
  }

  setCameraMatrix(matData: Float32Array) {
    (this.gl as WebGLRenderingContext).uniformMatrix4fv(this.cameraMatrix, false, matData);
    return this;
  }

  dispose() {
    //unbind the program if its currently active
    if ((this.gl as WebGLRenderingContext).getParameter((this.gl as WebGLRenderingContext).CURRENT_PROGRAM) === this.shaderProgram) {
      (this.gl as WebGLRenderingContext).useProgram(null);
    }
    (this.gl as WebGLRenderingContext).deleteProgram(this.shaderProgram);
  }


  //RENDER RELATED METHODS

  //Setup custom properties
  preRender() {} //abstract method, extended object may need need to do some things before rendering.

  // //Handle rendering a modal
  renderModal(modal: Modal) {
    this.setModalMatrix(modal.transform.getViewMatrix()); //Set the transform, so the shader knows where the modal exists in 3d space
    (this.gl as WebGLRenderingContext).bindVertexArray(modal.mesh.vao); //Enable VAO, this will set all the predefined attributes for the shader

    if (modal.mesh.indexCount) (this.gl as WebGLRenderingContext).drawElements(modal.mesh.drawMode, modal.mesh.indexLength, (this.gl as WebGLRenderingContext).UNSIGNED_SHORT, 0);
    else (this.gl as WebGLRenderingContext).drawArrays(modal.mesh.drawMode, 0, modal.mesh.vertexCount);

    (this.gl as WebGLRenderingContext).bindVertexArray(null);

    return this;
  }


  // Loads shader files from the given URLs, and returns a program as a promise
  static async initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {

    const loadFile = async (src: string) => {
      const response = await fetch(src);
      const data = await response.text();
      return data;
    }

    const [vertexShaderFile, fragmentShaderFile] = await Promise.all([loadFile(vsSource), loadFile(fsSource)]);
    const shaderProgram = new ShaderProgram(gl, vertexShaderFile, fragmentShaderFile);

    return shaderProgram;
  }
}