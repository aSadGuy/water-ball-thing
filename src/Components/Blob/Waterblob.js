import { Sphere } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { LayerMaterial, Displace, Fresnel } from "lamina";
import { Abstract } from "lamina/vanilla";
import { useRef, useState, useEffect } from "react";
import fragment from "./Shaders/fragment";
import vertex from "./Shaders/vertex";
import * as THREE from "three";
import { useControls } from "leva";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Shaders
 */
class CustomLayer extends Abstract {
  // Uniforms
  static u_color = "#00b8fe";
  static u_alpha = 1.0;
  static u_time = 0;
  static u_freq = new THREE.Vector2();
  static u_amp = 0;
  static u_noiseFreq = 0;
  static u_fragSpeed = 0;
  static u_alphaSpeed = 0;

  // Varyings
  static fragmentShader = fragment;
  static vertexShader = vertex;

  constructor(props) {
    super(CustomLayer);
  }
}
extend({ CustomLayer });

function Waterblob() {
  /**
   * References
   */
  const shader = useRef();
  const sphere = useRef();

  /**
   * Debug
   */
  const { frequencyX, frequencyY, amplitude } = useControls("vertex", {
    frequencyX: {
      value: 0.15,
      min: -5,
      max: 5,
      step: 0.05,
    },
    frequencyY: {
      value: 0.15,
      min: -5,
      max: 5,
      step: 0.05,
    },
    amplitude: {
      value: 0.0,
      min: 0,
      max: 2,
      step: 0.05,
    },
  });

  const { noiseFreq, fragSpeed, alphaSpeed } = useControls("fragment", {
    noiseFreq: {
      value: 2.3,
      min: 0,
      max: 10,
      step: 0.05,
    },
    fragSpeed: {
      value: 2.0,
      min: 0,
      max: 5,
      step: 0.05,
    },
    alphaSpeed: {
      value: 2.45,
      min: 0,
      max: 6,
      step: 0.05,
    },
  });

  /**
   * Sphere
   */
  useEffect(() => {
    if (!sphere.current) return;

    console.log(sphere.current);
  }, []);

  /**
   * Animate
   */
  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();

    shader.current.time = elapsedTime;

    shader.current.freq.x = frequencyX;
    shader.current.freq.y = frequencyY;
    shader.current.amp = amplitude;

    shader.current.noiseFreq = noiseFreq;
    shader.current.fragSpeed = fragSpeed;
    shader.current.alphaSpeed = alphaSpeed;

    // sphere.current.rotation.x += delta;
    // sphere.current.rotation.y += delta;
    // sphere.current.rotation.z += delta;

    // console.log(sphere.current.rotation.y) 
  });

  return (
    <mesh>
      <sphereGeometry ref={sphere} args={[0.5, 50, 50]} />
      <LayerMaterial
        lighting="physical"
        transmission={1}
        roughness={0.1}
        // wireframe
      >
        <customLayer ref={shader} />
        {/* <Displace 
        strength={0.1} 
        scale={2}
        type="perlin"
        /> */}
      </LayerMaterial>
    </mesh>
  );
}

export default Waterblob;
