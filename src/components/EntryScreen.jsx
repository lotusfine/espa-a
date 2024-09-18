// src/components/EntryScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const EntryScreen = ({ onEnter }) => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: "#fbf5f2" }} // Reemplaza con el color de fondo que subiste
    >
      <motion.img
        src="/images/logo.png" // Ruta del logo
        alt="Logo"
        className="cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        onClick={onEnter} // Llama a la función para entrar cuando se hace clic
        style={{ width: "560px", height: "auto" }} // Ajusta el tamaño según sea necesario
      />
    </div>
  );
};

export default EntryScreen;
