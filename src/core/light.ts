import { Vec3Struct } from "./geometry";
import ShaderProgram from './shaderProgram';

export default class Light {
    constructor(x: number, y: number, z: number) {
        this.lightDirection = Vec3Struct(x, y, z);
        this.ambientLight = 0.3;
    }

    lightDirection: any;
    ambientLight: number;


    useLight(shaderProgram: ShaderProgram): void {
        const dir = this.lightDirection;
        const glContext = shaderProgram.glContext;
        glContext?.uniform3f(shaderProgram.lightDirection, dir.x, dir.y, dir.z);
        glContext?.uniform1f(shaderProgram.ambientLight, this.ambientLight);
    }

}