// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import Section1Canvas from "./components/Section1Canvas";
import AnimatedTextSection from "./components/AnimatedTextSection"; // Importa el componente recién creado
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      {/* Header con las pestañas */}
      <Header />

      {/* Contenedor principal */}
      <main>
        {/* Transición inicial de blanco al fondo de la Sección 1 */}
        <motion.div
          initial={{ backgroundColor: "#fff" }}
          animate={{ backgroundColor: "#f0f0f0" }} // Fondo de la Sección 1
          transition={{ duration: 2 }} // Duración de la transición
          className="section1-container"
        >
          {/* Canvas 3D con Texto Flotante y Video */}
          <Section1Canvas />
        </motion.div>

        {/* Secciones con texto animado */}
        <AnimatedTextSection title="¿Quién soy?" content="Descripción de la sección..." />
        <AnimatedTextSection title="Propuesta" content="Descripción de la propuesta..." />
        {/* Más secciones */}
      </main>
    </div>
  );
};

export default App;
