import { Sphere } from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel, Displace } from "lamina";
import { Abstract } from "lamina/vanilla";
import { extend } from "@react-three/fiber";

class CustomLayer extends Abstract {
  static u_color = "red";
  static u_alpha = 1;

  static fragmentShader = /* glsl */ `   
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
  static vertexShader = /* glsl */ `   
    // Varyings must be prefixed by "v_"
    varying vec3 v_Position;

    void main() {
        v_Position = position;
        return position * 2.;
    }
`;

  constructor(props) {
    super(CustomLayer);
  }
}

function Waterblob() {
  extend({ CustomLayer });
  return (
    <Sphere args={[1, 100, 100]}>
      <LayerMaterial
        color="#ffffff"
        lighting="physical"
        transmission={1}
        roughness={0.1}
      >
        <Fresnel
          color={"#fefefe"}
          bias={-0.3430000000000002}
          intensity={3.8999999999999946}
          power={3.3699999999999903}
          factor={1.119999999999999}
          mode={"screen"}
        />
        <Depth
          near={0.4854}
          far={0.7661999999999932}
          origin={[-0.4920000000000004, 0.4250000000000003, 0]}
          colorA={"#fec5da"}
          colorB={"#00b8fe"}
        />
      </LayerMaterial>
    </Sphere>
  );
}

export default Waterblob;
