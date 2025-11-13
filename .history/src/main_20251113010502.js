import * as THREE from 'three/webgpu'
import { materialNode, vec3 } from 'three/tsl'

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

function init() {
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshStandardMaterial({
		color: 0xff0000,
	})
	const mesh = new THREE.Mesh(geometry, material)
	scene.add(mesh)
}
