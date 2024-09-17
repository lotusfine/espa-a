// src/components/ThreeCanvas.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatImage from './FloatImage';  

const ThreeCanvas = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      gl={{ alpha: true, antialias: false }}  // Desactiva el antialias para reducir la carga
      camera={{ position: [0, 0, 10] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio); // Ajusta el pixel ratio para mejorar rendimiento
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <FloatImage />  
    </Canvas>
  );
};

export default ThreeCanvas;
