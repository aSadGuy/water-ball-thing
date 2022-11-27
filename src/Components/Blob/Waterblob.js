import { Sphere } from "@react-three/drei";
import { LayerMaterial, Displace, Fresnel } from "lamina";
import { Abstract } from "lamina/vanilla";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import fragment from "./Shaders/fragment";
import vertex from "./Shaders/vertex";
import { MeshPhysicalMaterial } from "three";

class CustomLayer extends Abstract {
  static u_color = "#00b8fe";
  static u_alpha = 1;
  static u_time = 0;

  static fragmentShader = fragment;
  static vertexShader = vertex;

  constructor(props) {
    super(CustomLayer);
  }
}

function Waterblob() {
  const ref = useRef();

  useFrame(({ clock, delta }) => {
    ref.current.time = clock.getElapsedTime();
  });

  extend({ CustomLayer });
  return (
    <Sphere args={[0.5, 50, 50]}>
      <LayerMaterial
        color="#ffffff"
        lighting="physical"
        transmission={1}
        roughness={0.1}
      >
        <customLayer ref={ref} />
      </LayerMaterial>
    </Sphere>
  );
}

export default Waterblob;
