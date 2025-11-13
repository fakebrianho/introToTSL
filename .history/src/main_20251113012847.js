import * as THREE from 'three/webgpu'
import { vec3, time, add, mul, sin, cos } from 'three/tsl'
import { addLight } from './addLight'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const renderer = new THREE.WebGPURenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.set(0, 0, 5)

const meshes = {}
const lights = {}

init().catch((error) => {
	console.error('Failed to initialize renderer', error)
})

async function init() {
	await renderer.init()

	const r = mul(sin(time), 0.5)
	const g = mul(cos(time), 0.5)
	const b = 0.5
	const animatedColor = add(vec3(r, g, b), 0.5)
	const mat = new THREE.MeshStandardNodeMaterial()
	mat.colorNode = animatedColor
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const mesh = new THREE.Mesh(geometry, mat)
	scene.add(mesh)

	lights.default = addLight({ xPos: 5, yPos: 5, zPos: 5 })
	scene.add(lights.default)

	animate()
}
function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
