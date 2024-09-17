// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { SlideTabsExample } from './AnimatedText';
import { motion } from 'framer-motion';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // Controla si el header está visible o no
  const [isScrollingUp, setIsScrollingUp] = useState(false); // Controla la dirección del desplazamiento

  useEffect(() => {
    let lastScrollY = window.pageYOffset; // Mantiene el último valor de desplazamiento Y

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Ocultar header cuando se desplaza hacia abajo
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      }

      // Mostrar header cuando se desplaza hacia arriba
      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e) => {
      // Mostrar el header cuando el mouse se mueve a la parte superior de la pantalla
      if (e.clientY < 50) {
        setShowHeader(true);
      } else {
        // Solo oculta el header si no estamos desplazándonos hacia arriba
        if (!isScrollingUp) setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isScrollingUp]); // Se asegura de que el efecto se ejecute cada vez que cambia la dirección de desplazamiento

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-10" // Asegúrate de que no hay ninguna clase de fondo
      style={{ backgroundColor: 'transparent' }} // Asegura que el fondo sea transparente
      animate={{ y: showHeader ? 0 : '-100%' }} // Utiliza Framer Motion para animar la entrada y salida
      transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Ajusta la animación para que sea suave
    >
      <SlideTabsExample />
    </motion.header>
  );
};

export default Header;
