// src/components/MuteButton.jsx
import React, { useState } from "react";

const MuteButton = ({ audioRef }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 bg-transparent border-none outline-none cursor-pointer"
      style={{ zIndex: 100 }}
    >
      <img
        src={isMuted ? "/buttons/off.svg" : "/buttons/on.svg"}
        alt="Mute Button"
        style={{ width: 40, height: 40 }}
      />
    </button>
  );
};

export default MuteButton;
