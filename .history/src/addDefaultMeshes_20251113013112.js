import * as THREE from 'three/webgpu'

export const addDefaultMeshes = () => {
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshStandardNodeMaterial()
	material.colorNode = new THREE.Color(0x00ff00)
	const cube = new THREE.Mesh(geometry, material)

	return cube
}
