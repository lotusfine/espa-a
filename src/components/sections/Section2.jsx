// src/components/sections/Section2.jsx
import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: '0 10%', backgroundColor: "#f6f1eb" }}>
      {/* Imagen con animación en el lado izquierdo */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
      > 
       {/* Contenedor con clip-path para la sombra y el efecto redondeado */}
       <div
          style={{
            width: "400px",  // Ajusta el tamaño de la imagen
            height: "auto",
            position: "relative",
            borderRadius: "300px",  // Borde redondeado
            boxShadow: "0 40px 40px rgba(0, 0, 0, 0.3)", // Sombra alrededor de la imagen
            overflow: "hidden",
          }}
        >
          <img
          src="/images/perfil.png"
          alt="Perfil"
          style={{
            width: "400px",  // Ajusta el tamaño de la imagen
            height: "auto",
            position: "relative",
            boxShadow: "0 10px 200px rgba(0, 0, 0, 0.3)", // Sombra alrededor de la imagen
            objectFit: "cover", // Asegura que la imagen se ajuste al contenedor
            borderRadius: "300px",
          }}
        />
        </div>
      </motion.div>

      {/* Contenido de texto en el lado derecho */}
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <img src="/images/quiensoy.png" alt="Quién Soy" style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Soy Maria Eugenia. Nací en Buenos Aires, Argentina en 1988.
          <br />
          <br />
          Según mi primer doctor aprendí a caminar un poco tarde. 1 año y 4 meses.
          <br />
          Hoy entiendo que me demoré porque ya desde chiquita me importaba cuidar mi cuerpo y mi movimiento.
          <br />
          <br />
          A mis 7 años nos enamoramos con la Danza, un amor profundo, difícil y placentero que dura hasta hoy. A los 16 empecé a enseñar. Viajé por el mundo, estudié en New York, en Bruselas y en la Universidad de Buenos Aires. Bailé en el escenario, conocí las mejores compañías de danza, cree mis obras y una de las cosas más importantes: me lastimé.
          <br />
          <br />
          Bailando me quebré el pie derecho, estuve 3 meses sin caminar, me desgarré el aductor, incluso llegué a infiltrarme para cumplir con la escena, entre otras cosas.
          <br />
          <br />
          Algunas de estas lesiones son crónicas. Duelen. pero si no fuese por ellas quizás no me hubiese reencontrado con esa niña de 1 año y 4 meses interesada en cuidarse y cuidar.
          <br />
          <br />
          Así llegué al Yoga, al Pilates, al entrenamiento físico, a las disciplinas somáticas y desde ese lugar volví a la danza.
          <br />
          <br />
          Hace 10 años que estoy compartiendo todos estos conocimientos que cambiaron mi vida, que me hicieron sentir más libre, plena, verdadera y más feliz.
        </p>
      </div>
    </div>
  );
};

export default Section2;
