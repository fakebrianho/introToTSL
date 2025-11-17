import { Fn, abs, max, sub, float } from 'three/tsl'

/**
 * Returns a 2d box SDF based on a given uv and size.
 * @param {vec2} _uv - The UV coordinates (vec2).
 * @param {number} [_size=0.0] - The half-size (extent) of the box along each axis.
 * @returns {number} The signed distance from the box surface.
 */
export const sdBox2d = Fn(([_uv, _size = float(0.0)]) => {
	return max(abs(_uv.x), abs(_uv.y)).sub(_size)
})
