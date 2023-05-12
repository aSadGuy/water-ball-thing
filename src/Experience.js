import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Waterblob from "./Components/Blob/Waterblob";
import { extend } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <color args={["#eee"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={0.1} />
      <ambientLight intensity={0.1} />

      <Waterblob />

      <mesh scale={4} rotation-x={Math.PI * -0.5} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}
