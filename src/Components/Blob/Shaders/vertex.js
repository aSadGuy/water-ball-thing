export default /* glsl */
`
    // Varyings must be prefixed by "v_"
    varying vec3 v_Position;

    void main() {
        v_Position = position;
        return position * 2.;
    }
`;
