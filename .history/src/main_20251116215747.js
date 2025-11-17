import * as THREE from 'three/webgpu'
import { addLight } from './addLight'
import { addDefaultMeshes } from './addDefaultMeshes'

const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
camera.position.z = 1

const renderer = new THREE.WebGPURenderer({
	antialias: true,
	toneMapping: THREE.NoToneMapping,
	outputColorSpace: THREE.LinearSRGBColorSpace,
})
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
	meshes.default = addDefaultMeshes()
	lights.default = addLight({ xPos: 5, yPos: 5, zPos: 5 })
	scene.add(meshes.default)
	scene.add(lights.default)
	renderer.setAnimationLoop(animate)
}
function animate() {
	renderer.render(scene, camera)
}
