// src/components/SoundToggleButton.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const SoundToggleButton = ({ audioRef }) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      onClick={handleToggleSound}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.8 }} // Animación de click
      className="fixed bottom-5 right-5 p-2 bg-white rounded-full shadow-lg" // Estilos fijos y minimalistas
      style={{ zIndex: 1000 }} // Asegura que el botón esté siempre en el frente
    >
      <img
        src={isMuted ? "/buttons/off.svg" : "/buttons/on.svg"}
        alt={isMuted ? "Sound Off" : "Sound On"}
        style={{ width: "24px", height: "24px" }} // Tamaño del icono
      />
    </motion.button>
  );
};

export default SoundToggleButton;
