// src/components/FloatImage.jsx
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const FloatImage = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(a) * 0.5;  // Asegúrate de que el objeto 3D esté animado correctamente
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default FloatImage;
