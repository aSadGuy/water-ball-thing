import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Waterblob from "./Components/Blob/Waterblob";
import { extend } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <color args={["white"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={0.1} />
      <ambientLight intensity={0.1} />

      <Waterblob />

      <mesh>
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
