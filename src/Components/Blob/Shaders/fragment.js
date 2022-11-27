export default /* glsl */
`
    uniform vec3 u_color;
    uniform float u_alpha;

    varying vec3 v_Position;
    varying vec2 v_Uv;

    vec4 main() {
        // Local variables must be prefixed by "f_"
        vec4 f_color = vec4(u_color, u_alpha);
        return f_color;
    }
`;
