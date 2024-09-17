// src/components/Section1Canvas.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

// VideoPlane Component
const VideoPlane = ({ videoUrl, position, onDrag }) => {
  const videoRef = useRef();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoTexture, setVideoTexture] = useState();

  // Load video and create texture
  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true; // Auto-play without sound
    video.play();

    const texture = new THREE.VideoTexture(video);
    setVideoTexture(texture);
    videoRef.current = video; // Keep a reference to the video
  }, [videoUrl]);

  // Handle play/pause
  const handlePlay = () => {
    if (videoRef.current) {
      videoPlaying ? videoRef.current.pause() : videoRef.current.play();
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <mesh position={position} onClick={handlePlay}>
      <planeGeometry args={[4, 3]} />
      {videoTexture && <meshBasicMaterial map={videoTexture} toneMapped={false} />}
    </mesh>
  );
};

const Section1Canvas = () => {
  const [isVisible, setIsVisible] = useState(true); // Assume section visibility is managed properly

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: '100%', height: '100vh' }}>
      {/* Floating Text */}
      {isVisible && (
        <Text
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/CormorantGaramond-Regular.ttf"
          position={[0, 0, 0]} // Centered text
        >
          Yoga Danza y Pilates
        </Text>
      )}

      {/* Video Gallery */}
      <VideoPlane videoUrl="/videos/sirenas.mp4" position={[-2, 0, 0]} />
      <VideoPlane videoUrl="/videos/barro.mp4" position={[2, 0, 0]} />
    </Canvas>
  );
};

export default Section1Canvas;
