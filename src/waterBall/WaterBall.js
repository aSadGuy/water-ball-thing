import { shaderMaterial } from "@react-three/drei";
import waterFragShader from "./waterFragShader";
import waterVertShader from "./waterVertShader";

function WaterBall() {
  return (
    <mesh>
      <sphereGeometry args={[1, 50, 50]} />
      <shaderMaterial
        vertexShader={waterVertShader}
        fragmentShader={waterFragShader}
        transparent={true}
      />
    </mesh>
  );
}

export default WaterBall;
