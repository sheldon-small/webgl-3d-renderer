import ShaderProgram from '../shaderProgram';
import { GLSetttings, ProgramEntrySettings, ShaderProgramMatrixFields } from "@/modules";
import Geometry from '../geometry';
import DepthTexture from '../Textures/depthTexture';
import ObjLoader from '../objLoader';
import { MeshData } from '@/entities';
import Vbuffer from '../vbuffer';


class DirectionalShadowShader {
	constructor(gl: WebGLRenderingContext, projectionMatrix: Float32Array) {
		const vertexShader = '#version 300 es\n' +
			'in vec3 a_position;' +

			'uniform mat4 u_mVMatrix;' +
			'uniform mat4 u_cameraMatrix;' +
			'uniform mat4 u_oMatrix;' +

			'mat4 m_worldMatrix;' +
			'mat4 m_viewProjectionMatrix;' +
			'mat4 m_worldViewProjectionMatrix;' +

			'void main(void){' +

				'm_worldMatrix = u_mVMatrix;' +
				'm_viewProjectionMatrix = u_oMatrix * u_cameraMatrix;' +
				'm_worldViewProjectionMatrix = m_viewProjectionMatrix * m_worldMatrix;' +

				'gl_Position = m_worldViewProjectionMatrix * vec4(a_position, 1.0);' +
			'}';

		const fragmentShader = '#version 300 es\n' +
			'precision mediump float;' +

			'uniform vec4 u_color;' +

			'out vec4 finalColor;' +

			'void main(void) {' +

				'finalColor = u_color;' +

			'}';

		
		const program = new ShaderProgram(gl,vertexShader, fragmentShader)

		program.activateShader()

		this.positionLoc = gl.getAttribLocation(program.program as WebGLProgram, GLSetttings.ATTR_POSITION_NAME)

		program.updateGPU(projectionMatrix, ShaderProgramMatrixFields.ORTHO_MATRIX)
		const uColor = gl.getUniformLocation(program.program as WebGLProgram, GLSetttings.UNI_COLOR)
		gl.uniform4fv(uColor, new Float32Array([0.0, 0.0, 0.0, 1.0]))

		this.shaderProgram = program

		//Cleanup
		program.deactivateShader()
	}

	positionLoc: number
	shaderProgram: ShaderProgram
}


class DirectionalShadow {

	constructor() {}

	static async createGeometry(gl: WebGLRenderingContext, shaderProgram: DirectionalShadowShader, objSrc: string) {
		return new Geometry(await DirectionalShadow.createMesh(gl, shaderProgram, objSrc));
	}

	static async createMesh(gl: WebGLRenderingContext, shaderProgram: DirectionalShadowShader, objSrc: string,) {

		const model = await DirectionalShadow.loadModel(gl, objSrc);
		const vertexCount = model.vertices.vertexCount();

		const mesh: MeshData = {
			positions: new Vbuffer(gl, model.vertices.positions(), vertexCount, GLSetttings.BUFFER_TYPE_VERTICES),
			depth: model.texture as DepthTexture,
			drawMode: gl.TRIANGLES,
			vertexCount,
		}

		mesh.positions.bindToAttribute(shaderProgram.positionLoc as number, GLSetttings.DEFAULT_STRIDE, GLSetttings.DEFAULT_OFFSET);

		return mesh;
	}

	static async loadModel(gl: WebGLRenderingContext, objSrc: string) {
		const objVertices = await ObjLoader.loadOBJ(objSrc);
		const objTexture = new DepthTexture(gl, ProgramEntrySettings.DEPTH_TEXTURE_SIZE)
		const [vertices, texture] = await Promise.all([objVertices, objTexture]);
		
		return {vertices, texture};
	}

}


export {
	DirectionalShadowShader,
	DirectionalShadow
}