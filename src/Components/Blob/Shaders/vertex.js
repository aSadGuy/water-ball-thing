export default /* glsl */
`
    uniform float u_time;
    uniform vec2 u_freq;
    uniform float u_amp;

    varying vec3 v_position;
    varying vec2 v_uv;

    void main() {
        vec4 f_modelPosition = modelMatrix * vec4(position, 1.0);

        float f_elevation = 
            sin(f_modelPosition.x * u_freq.x + u_time) * 
            cos(f_modelPosition.y * u_freq.y + u_time) * u_amp;

        // float f_elevation = 
        //     sin(position.x * 0.15 + u_Time) *    
        //     sin(position.y * 0.15 + u_Time) * 0.5;

        v_position = position; 
        v_uv = uv;

        return position + f_elevation;
    }
`;
