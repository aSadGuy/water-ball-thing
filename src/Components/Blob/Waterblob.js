import { Sphere } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { LayerMaterial, Displace, Fresnel } from "lamina";
import { Abstract } from "lamina/vanilla";
import { useRef, useState } from "react";
import fragment from "./Shaders/fragment";
import vertex from "./Shaders/vertex";
import * as THREE from "three";
import { useControls } from "leva";

function Waterblob() {
  const ref = useRef();
  const sphere = useRef();
  /**
   * Debug
   */
  const { frequency, amplitude } = useControls("vertex", {
    frequency: {
      value: [0.15, 0.15],
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
   * Shaders
   */
  class CustomLayer extends Abstract {
    // Uniforms
    static u_color = "#00b8fe";
    static u_alpha = 1.0;
    static u_time = 0;
    static u_freq = new THREE.Vector2(0.15, 0.15);
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

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  /**
   * Animate
   */

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();

    ref.current.time = elapsedTime;
    ref.current.amp = amplitude;
    ref.current.noiseFreq = noiseFreq;
    ref.current.fragSpeed = fragSpeed;
    ref.current.alphaSpeed = alphaSpeed;

    sphere.current.rotation.x += delta;
    sphere.current.rotation.y += delta;
    sphere.current.rotation.z += delta;

    // console.log(sphere.current.rotation.y)
  });

  // console.log(ref.current.time);

  return (
    <Sphere ref={sphere} args={[0.5, 50, 50]}>
      <LayerMaterial
        color="#ffffff"
        lighting="physical"
        // transmission={1}
        roughness={1.0}
      >
        <customLayer ref={ref} />
        {/* <Displace 
        strength={0.1} 
        scale={2}
        type="perlin"
        
        /> */}
      </LayerMaterial>
    </Sphere>
  );
}

export default Waterblob;
