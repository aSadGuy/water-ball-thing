export default /* glsl */
`
    uniform float u_time;
    uniform vec2 u_freq;
    uniform float u_amp;

    varying vec3 v_position;
    varying vec3 v_normal;
    varying vec2 v_uv;
    varying float v_displacement;

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

    float smoothMod(float axis, float amp, float rad){
        float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));
        float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);
        float at = atan(top / bottom);
        return amp * (1.0 / 2.0) - (1.0 / PI) * at;
    }

    float fit(float unscaled, float originalMin, float originalMax, float minAllowed, float maxAllowed){
        return (maxAllowed - minAllowed) * (unscaled - originalMin) / (originalMax - originalMin) + minAllowed;
    }

    float wave(vec3 position) {
        return fit(smoothMod(position.y * 6.0, 1.0, 1.5), 0.35, 0.6, 0.0, 1.0);
    }

    void main() {
        vec3 coords = normal;
        coords.y += u_time * 0.3;
        vec3 noisePattern = vec3(cnoise(coords));
        float pattern = wave(noisePattern);
        
        v_position = position; 
        v_uv = uv;
        v_normal = normal;
        v_displacement = pattern;

        float displacement = v_displacement / 3.0;
        
        float strength = cnoise(v_position * 1.0 + vec3((u_time * 0.8)));

        vec3 newPosition = position + normal * v_displacement * 0.03;

        return newPosition;
    }
`;
