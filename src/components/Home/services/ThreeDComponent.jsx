"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Box } from "@mui/material";

function Model({ url, scale }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() / 4; // Rotate model around its own Y-axis
    }
  });

  useEffect(() => {
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    const light3 = new THREE.DirectionalLight(0xffffff, 0.8);
    const light4 = new THREE.DirectionalLight(0xffffff, 0.8);
    const light5 = new THREE.DirectionalLight(0xffffff, 0.8);

    light1.position.set(10, 5, 10);
    scene.add(light1);

    light2.position.set(0, 5, 0);
    scene.add(light2);

    light3.position.set(-10, 5, -10);
    scene.add(light3);

    light4.position.set(-10, 10, 100);
    scene.add(light4);

    light5.position.set(20, 15, 25);
    scene.add(light5);

    return () => {
      scene.remove(light1);
      scene.remove(light2);
      scene.remove(light3);
      scene.remove(light4);
      scene.remove(light5);
    };
  }, [scene]);

  return (
    <group ref={meshRef} scale={scale} draggable={false} onPointerDown={(e) => e.stopPropagation()}>
      <primitive object={scene} position={[0, -6, 0]} draggable={false} />
    </group>
  );
}

export default function ThreeDComponent({ modelUrl }) {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScale = () => {
    if (windowSize.width < 600) return [0.5, 0.5, 0.5];
    if (windowSize.width < 900) return [0.75, 0.75, 0.75];
    return [1, 1, 1];
  };

  return (
    <Box style={{ width: "100%", height: "600px", margin: "0 auto", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas
        camera={{ position: [0, 15, 80], fov: 25 }}
        draggable={false}
        onPointerDown={(e) => e.stopPropagation()} // Prevents interaction with canvas
      >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[5, 0, -10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[0, 0, 10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[0, 2, 10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[0, -2, 10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[10, 10, 10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[-10, 10, -10]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[-10, 10, 100]} intensity={1} color={"0xffffff"} />
        <directionalLight position={[20, 15, 25]} intensity={1} color={"0xffffff"} />
        <spotLight position={[15, 5, 10]} color={"0x80ff80"} angle={1} penumbra={1} intensity={0.6} />
        <spotLight position={[15, 10, 20]} color={"0x80ff80"} angle={1} penumbra={1} intensity={0.6} />
        <spotLight position={[5, 5, 5]} color={"0x80ff80"} angle={1} penumbra={1} intensity={0.6} />
        <Suspense fallback={"Loading..."}>
          <Model url={modelUrl} scale={getScale()} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </Box>
  );
}
