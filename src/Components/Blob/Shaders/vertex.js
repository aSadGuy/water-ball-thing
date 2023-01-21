export default /* glsl */
`
    uniform float u_time;
    uniform vec2 u_freq;
    uniform float u_amp;

    varying vec3 v_position;
    varying vec2 v_uv;

    #define cnoise lamina_noise_perlin

    float fbm1(in vec3 st) {
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
    float fbm2(in vec3 st) {
        // initial values
        float value = 0.0;
        float amplitude = 0.76;
        float frequency = 0.9;
    
        // Loop of octaves
        for (int i = 0; i < 8; i++) {
            value += amplitude * cnoise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }
    float fbm3(in vec3 st) {
        // initial values
        float value = 0.0;
        float amplitude = 0.29864;
        float frequency = 0.4;
    
        // Loop of octaves
        for (int i = 0; i < 8; i++) {
            value += amplitude * cnoise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }
    float fbm4(in vec3 st) {
        // initial values
        float value = 0.0;
        float amplitude = 0.689;
        float frequency = 0.0;
    
        // Loop of octaves
        for (int i = 0; i < 8; i++) {
            value += amplitude * cnoise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }

    void main() {
        vec4 f_modelPosition = modelMatrix * vec4(position, 1.0);

        float strength = cnoise(v_position * 2.0 + vec3((u_time * 0.1)));
        strength += fbm1(vec3(strength));
        // strength += fbm2(vec3(strength));
        // strength += fbm3(vec3(strength));
        strength += fbm4(vec3(-strength)); 

        vec3 pos = position;
        
        pos += vec3(strength);

        v_position = position; 
        v_uv = uv;

        return position;
    }
`;
