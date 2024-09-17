// src/components/AnimatedTextSection.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextSection = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
      animate={{ opacity: 1, y: 0 }}  // Animación hacia la posición final
      transition={{ duration: 0.8 }}  // Duración de la animación
      className="p-8" // Ajusta estos estilos según tus necesidades
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{content}</p>
    </motion.div>
  );
};

export default AnimatedTextSection;
