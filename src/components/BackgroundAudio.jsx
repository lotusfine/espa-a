// src/components/BackgroundAudio.jsx
import React, { useEffect, useRef, useState } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Ajusta el volumen a un nivel más bajo
      audioRef.current.play().catch((error) => console.log(error)); // Maneja el error de reproducción
    }
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/audio/sound.mp3" />
      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          zIndex: 1000,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src={isMuted ? "/buttons/off.svg" : "/buttons/on.svg"} alt="mute-toggle" width={30} />
      </button>
    </>
  );
};

export default BackgroundAudio;
