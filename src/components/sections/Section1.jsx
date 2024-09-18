// src/components/sections/Section1.jsx
import React from "react";

const Section1 = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <video
        src="/videos/sirenas.mp4"
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      
      {/* Aquí reemplazamos el texto con la imagen */}
      <img
        src="/images/titulo.png"
        alt="Título Yoga Danza Pilates"
        className="absolute inset-0 m-auto"
        style={{
          width: "90%",
          maxWidth: "600px",
          top: "20%", // Ajusta la posición
          left: "30%",
          transform: "translate(-50%, -50%)",
          opacity: 0.9, // Ajusta la opacidad si es necesario
        }}
      />
    </div>
  );
};

export default Section1;
