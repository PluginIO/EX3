import { IndexBuffer } from './resources/IndexBuffer';
import { BufferUsage } from './resources/BufferUsage';
import { RendererInput } from './renderers/webgl_20/RendererInput';
import { TextureFormat } from './resources/TextureFormat';
import { GL20 } from './renderers/webgl_20/GL20';
import { GL20Renderer } from './renderers/webgl_20/GL20Renderer';
import { VertexBufferAccessor } from './resources/VertexBufferAccessor';
import { VertexFormat } from './resources/VertexFormat';
import { AttributeUsage } from './resources/AttributeUsage';
import { AttributeType } from './resources/AttributeType';
import { VertexBuffer } from './resources/VertexBuffer';
import { TriMesh } from './display/TriMesh';
import { DefaultEffect } from './effects/local/DefaultEffect';
import { VisualEffectInstance } from './shaders/VisualEffectInstance';
import { CameraAndLightNodes } from './examples/CameraAndLightNodes';
import { Camera } from './display/Camera';
import { Vector } from './geom/Vector';
import { Point } from './geom/Point';
import { SrcBlendMode } from './shaders/SrcBlendMode';
import { DstBlendMode } from './shaders/DstBlendMode';
import { CompareMode } from './shaders/CompareMode';
import { AlphaState } from './shaders/states/AlphaState';
import { CullingMode } from './display/CullingMode';
import { CameraNode } from './display/CameraNode';
import { PVWMatrixConstant } from './shaders/floats/PVWMatrixConstant';
import { Culler } from './display/Culler';
import { Node } from './display/Node';

console.log('Hello EX3')

/*
// TODO: setup testing
let input: RendererInput = new RendererInput()
input.mContext = GL20.createContext('ex3-root')

let renderer:GL20Renderer = new GL20Renderer(input, 800, 600,
    TextureFormat.R8G8B8, TextureFormat.D24S8, 4)
renderer.setDepthRange(0.01, 1)

renderer.clearColor = [0, 0.3, 0.5, 1]
renderer.clearBuffers()

renderer.clearColor = [0.3, 1, 0.2, 1]
renderer.clearColorBufferRect(50, 100, 200, 120)

renderer.resize(700, 400)
renderer.reverseCullOrder = true

renderer.camera = new Camera(true)

let vFormat: VertexFormat = VertexFormat.create(3,
    AttributeUsage.POSITION, AttributeType.FLOAT3, 0,
    AttributeUsage.NORMAL, AttributeType.FLOAT3, 0,
    AttributeUsage.TEXCOORD, AttributeType.FLOAT3, 1)

console.log(`Stride: ${vFormat.stride}`)

let vBuffer: VertexBuffer = new VertexBuffer(4, vFormat.stride, BufferUsage.STATIC)
let iBuffer: IndexBuffer = new IndexBuffer(6, 2, BufferUsage.STATIC)

let vba: VertexBufferAccessor = new VertexBufferAccessor(vFormat, vBuffer)
vba.setPositionAt(0, [-1, -1, 0])
vba.setPositionAt(1, [ 1, -1, 0])
vba.setPositionAt(2, [ 1,  1, 0])
vba.setPositionAt(3, [-1,  1, 0])

vba.setNormalAt(0, [0, 0, 1])
vba.setNormalAt(1, [0, 0, 2])
vba.setNormalAt(2, [0, 0, 3])
vba.setNormalAt(3, [0, 0, 4])

vba.setTCoordAt(1, 0, [0, 4, 0])
vba.setTCoordAt(1, 1, [5, 0, 0])
vba.setTCoordAt(1, 2, [0, 0, 6])
vba.setTCoordAt(1, 3, [0, 7, 0])

iBuffer.data.position = 0
iBuffer.data.writeInt16(0)
iBuffer.data.writeInt16(1)
iBuffer.data.writeInt16(3)
iBuffer.data.writeInt16(1)
iBuffer.data.writeInt16(2)
iBuffer.data.writeInt16(3)

console.log(`Viewport: ${renderer.viewport}`)
console.log(`Width: ${renderer.width}`)
console.log(`Height: ${renderer.height}`)
console.log(`Depth range: ${renderer.depthRange}`)

console.log(`Position 0: ${vba.getPositionAt(0)}`)
console.log(`Position 1: ${vba.getPositionAt(1)}`)
console.log(`Position 2: ${vba.getPositionAt(2)}`)
console.log(`Position 3: ${vba.getPositionAt(3)}`)

console.log(`Normal 0: ${vba.getNormalAt(0)}`)
console.log(`Normal 1: ${vba.getNormalAt(1)}`)
console.log(`Normal 2: ${vba.getNormalAt(2)}`)
console.log(`Normal 3: ${vba.getNormalAt(3)}`)

console.log(`TCoord 0: ${vba.getTCoordAt(1, 0)}`)
console.log(`TCoord 1: ${vba.getTCoordAt(1, 1)}`)
console.log(`TCoord 2: ${vba.getTCoordAt(1, 2)}`)
console.log(`TCoord 3: ${vba.getTCoordAt(1, 3)}`)


let mesh: TriMesh = new TriMesh(vFormat, vBuffer, iBuffer)
console.log("numTriangles: " + mesh.numTriangles)
let effectInstance: VisualEffectInstance = new DefaultEffect().createInstance()
renderer.draw(mesh, effectInstance)

let example: CameraAndLightNodes = new CameraAndLightNodes()
example.onInitialize()
*/








/*
// TODO: setup testing
let input: RendererInput = new RendererInput()
input.mContext = GL20.createContext('ex3-root')

let renderer:GL20Renderer = new GL20Renderer(input, 800, 600,
    TextureFormat.R8G8B8, TextureFormat.D24S8, 4)
renderer.setDepthRange(0.01, 1)

renderer.resize(640, 480)
renderer.reverseCullOrder = true

let vFormat: VertexFormat = VertexFormat.create(1,
    AttributeUsage.POSITION, AttributeType.FLOAT3, 0)

console.log(`Stride: ${vFormat.stride}`)

let vBuffer: VertexBuffer = new VertexBuffer(4, vFormat.stride, BufferUsage.STATIC)
let iBuffer: IndexBuffer = new IndexBuffer(6, 2, BufferUsage.STATIC)

let vba: VertexBufferAccessor = new VertexBufferAccessor(vFormat, vBuffer)
vba.setPositionAt(0, [-1, -1, 0])
vba.setPositionAt(1, [ 1, -1, 0])
vba.setPositionAt(2, [ 1,  1, 0])
vba.setPositionAt(3, [-1,  1, 0])

iBuffer.data.position = 0
iBuffer.data.writeInt16(0)
iBuffer.data.writeInt16(1)
iBuffer.data.writeInt16(3)
iBuffer.data.writeInt16(1)
iBuffer.data.writeInt16(2)
iBuffer.data.writeInt16(3)

console.log(`Viewport: ${renderer.viewport}`)
console.log(`Width: ${renderer.width}`)
console.log(`Height: ${renderer.height}`)
console.log(`Depth range: ${renderer.depthRange}`)

console.log(`Position 0: ${vba.getPositionAt(0)}`)
console.log(`Position 1: ${vba.getPositionAt(1)}`)
console.log(`Position 2: ${vba.getPositionAt(2)}`)
console.log(`Position 3: ${vba.getPositionAt(3)}`)

let camera: Camera = new Camera(true)
camera.setFrustumFov(90, 800/600, 0.1, 100)
let dVector: Vector = Vector.UNIT_Z.negate()
let uVector: Vector = Vector.UNIT_Y
let rVector:Vector = Vector.UNIT_X
let position: Point = Point.new(0, 0, 1)
camera.setFrame(position, dVector, uVector, rVector)

renderer.camera = camera
renderer.setColorMask(true, true, false, true)

let alphaState: AlphaState = new AlphaState()
alphaState.blendEnabled = true
alphaState.srcBlend = SrcBlendMode.ZERO
alphaState.dstBlend = DstBlendMode.ONE
alphaState.compare = CompareMode.GEQUAL
alphaState.compareEnabled = true
alphaState.reference = 12345
renderer.overrideAlphaState = alphaState

let effectInstance: VisualEffectInstance = new DefaultEffect().createInstance()
let mesh: TriMesh = new TriMesh(vFormat, vBuffer, iBuffer)
console.log("numTriangles: " + mesh.numTriangles)

let scene: Node = new Node()
scene.culling = CullingMode.NEVER
let cameraNode: CameraNode = new CameraNode(camera)
scene.attachChild(mesh)
scene.attachChild(cameraNode)
scene.update(0, true)

console.log("World bounds: ", scene.worldBound)
console.log("Camera Node: ", cameraNode)
console.log("Camera frustum: ", camera.frustum)

let culler: Culler = new Culler(camera)
culler.computeVisibleSet(scene)

console.log(culler.frustum)
console.log("Visible set: ", culler.visibleSet)

let pvwMatrixFloat: PVWMatrixConstant = new PVWMatrixConstant()
pvwMatrixFloat.setRegister(0, [1, 2, 3, 4])
pvwMatrixFloat.setRegister(1, [5, 6, 7, 8])
pvwMatrixFloat.setRegister(2, [8, 6, 4, 2])
pvwMatrixFloat.setRegister(3, [1, 3, 5, 7])
console.log("numRegisters: ", pvwMatrixFloat.numRegisters)

console.log("reg 0: ", pvwMatrixFloat.getRegister(0))
console.log("reg 1: ", pvwMatrixFloat.getRegister(1))
console.log("reg 2: ", pvwMatrixFloat.getRegister(2))
console.log("reg 3: ", pvwMatrixFloat.getRegister(3))

console.log(pvwMatrixFloat.getAt(0))
console.log(pvwMatrixFloat.getAt(1))
console.log(pvwMatrixFloat.getAt(2))
console.log(pvwMatrixFloat.getAt(3))

export class ShaderTest 
{
    public static generateShader()
    {
        let vShader: WebGLShader = GL20.gl.createShader(GL20.gl.VERTEX_SHADER)
        GL20.gl.shaderSource(vShader, 
`attribute vec4 a_position;
uniform m44 u_pvwMatrix;
void main() {
    gl_Position = a_position * u_pvwMatrix;
}`)
        GL20.gl.compileShader(vShader)
        
        let fShader: WebGLShader = GL20.gl.createShader(GL20.gl.FRAGMENT_SHADER)
        GL20.gl.shaderSource(fShader, 
`void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}`)
        GL20.gl.compileShader(fShader)
        
        let program: WebGLProgram = GL20.gl.createProgram()
        GL20.gl.attachShader(program, vShader)
        GL20.gl.attachShader(program, fShader)
        GL20.gl.linkProgram(program)
        
        if ( !GL20.gl.getProgramParameter( program, GL20.gl.LINK_STATUS) ) {
            var info = GL20.gl.getProgramInfoLog(program);
            throw 'Could not compile WebGL program. \n' + info;
          }
        GL20.gl.useProgram(program)
    }
}

renderer.clearColor = [0, 0.3, 0.5, 1]
renderer.clearBuffers()

renderer.clearColor = [0.3, 1, 0.2, 1]
renderer.clearColorBufferRect(50, 100, 200, 120)

renderer.draw(mesh, effectInstance)
*/