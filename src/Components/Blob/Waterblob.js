import { Sphere } from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel, Displace } from "lamina";
import { Abstract } from "lamina/vanilla";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import fragment from "./Shaders/fragment";
import vertex from "./Shaders/vertex";

class CustomLayer extends Abstract {
  static u_color = "red";
  static u_alpha = 1;

  static fragmentShader = fragment;
  static vertexShader = vertex;

  constructor(props) {
    super(CustomLayer);
  }
}

function Waterblob() {
  const ref = useRef();

  // useFrame(({ clock }) => {
  //   ref.current.color.setRGB(
  //     Math.sin(clock.elapsedTime),
  //     Math.cos(clock.elapsedTime),
  //     Math.sin(clock.elapsedTime)
  //   );
  // });

  // console.log(ref.current.color);

  extend({ CustomLayer });
  return (
    <Sphere args={[1, 100, 100]}>
      <LayerMaterial
        // color="#ffffff"
        lighting="physical"
        transmission={1}
        roughness={0.1}
      >
        <customLayer ref={ref} />
        {/* <Fresnel
          // color={"#fefefe"}
          bias={-0.3430000000000002}
          intensity={3.8999999999999946}
          power={3.3699999999999903}
          factor={1.119999999999999}
          // mode={"screen"}
        />
        <Depth
          near={0.4854}
          far={0.7661999999999932}
          // origin={[-0.4920000000000004, 0.4250000000000003, 0]}
          colorA={"#fec5da"}
          colorB={"#00b8fe"}
        /> */}
      </LayerMaterial>
    </Sphere>
  );
}

export default Waterblob;
