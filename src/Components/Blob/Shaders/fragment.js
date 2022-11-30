export default /* glsl */
`
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_time;
    uniform float u_noiseFreq;
    uniform float u_fragSpeed;
    uniform float u_alphaSpeed;

    varying vec3 v_position;
    varying vec2 v_uv;

    #define cnoise lamina_noise_perlin

    vec4 main() {
        // Local variables must be prefixed by "f_"

        // lamina_noise_perlin()



        float f_strength = cnoise(v_position * u_noiseFreq + vec3((u_time * u_fragSpeed) * 0.5));

        vec4 f_color = vec4(v_position + f_strength *  0.2 , u_alpha + f_strength + sin(u_time * u_alphaSpeed));
        return f_color; 
    }
`;
