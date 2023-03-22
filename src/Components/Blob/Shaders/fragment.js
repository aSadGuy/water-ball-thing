export default /* glsl */
`
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_time;
    uniform float u_noiseFreq;
    uniform float u_fragSpeed;
    uniform float u_alphaSpeed;

    varying vec3 v_position;
    varying vec3 v_normal;
    varying vec2 v_uv;
    varying float v_displacement;

    #define FBM_INIT_AMP 0.5
    #define FBM_INIT_FREQ 10.0
    #define FBM_GAIN 0.675
    #define FBM_LACUNARITY 4.0

    #define cnoise lamina_noise_perlin

    float fbm(in vec3 st) {
        // initial values
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 0.0;
    
        // Loop of octaves
        for (int i = 0; i < 10; i++) {
            value += amplitude * cnoise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }

    vec4 main() {
 

        // vec4 f_color = vec4(vec3(v_displacement), 1.0); 
        vec4 f_color = vec4(vec3(1.0), 1.0); 


        return f_color; 
    }
`;
