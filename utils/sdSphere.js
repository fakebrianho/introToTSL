import { Fn, float, length } from 'three/tsl'
/**
 * Returns a sphere SDF based on a given uv and radius.
 * @param {Array} _uv - The UV coordinates (vec2).
 * @param {number} [r=0.0] - The radius of the sphere.
 * @returns {number} The signed distance from the sphere surface.
 */
export const sdSphere = Fn(([_uv, r = float(0.0)]) => {
	const _r = float(r)
	return length(_uv).sub(_r)
})
