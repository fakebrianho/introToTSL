import * as THREE from 'three/webgpu'

export const addLight = ({ xPos = 0, yPos = 0, zPos = 0 } = {}) => {
	const light = new THREE.DirectionalLight(0xffffff, 1)
	light.position.set(xPos, yPos, zPos)
	return light
}
