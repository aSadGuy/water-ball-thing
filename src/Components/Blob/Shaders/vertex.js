export default /* glsl */
`
    uniform float u_time;

    varying vec3 v_Position;
    varying vec2 v_Uv;

    void main() {
        v_Position = position; 
        v_Uv = uv;

        return position * 2.;
    }
`;
