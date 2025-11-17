import * as THREE from 'three/webgpu'
import { vec3, time, add, mul, sin, cos } from 'three/tsl'

export const addDefaultMeshes = () => {
	const r = mul(sin(time), 0.5)
	const g = mul(cos(time), 0.5)
	const b = 0.5
	const animatedColor = add(vec3(r, g, b), 0.5)
	const mat = new THREE.MeshBasicNodeMaterial({
		transparent: true,
		side: THREE.DoubleSide,
		depthWrite: false,
	})
	mat.colorNode = animatedColor
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const mesh = new THREE.Mesh(geometry, mat)
	return mesh
}
