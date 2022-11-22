import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import WaterBall from "./waterBall/WaterBall";
import Waterblob from "./Waterblob";
import CustomLayer from "./Waterblob";
import { extend } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <color args={["skyblue"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} />

      <Waterblob />
    </>
  );
}
