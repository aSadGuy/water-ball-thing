const waterFragShader = /* glsl */ `
    uniform vec3 uColor;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vElevation;

    // varying float vRandom;

    void main() {
        gl_FragColor = vec4(vUv, 1.0, 0.4);
    }
`;

export default waterFragShader;
