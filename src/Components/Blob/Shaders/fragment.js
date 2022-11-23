export default /* glsl */
`
    uniform vec3 u_color;
    uniform float u_alpha;

    // Varyings must be prefixed by "v_"
    varying vec3 v_Position;

    vec4 main() {
        // Local variables must be prefixed by "f_"
        vec4 f_color = vec4(u_color, u_alpha);
        return f_color;
    }
`;
