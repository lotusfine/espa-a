// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { SlideTabsExample } from './AnimatedText';
import { motion } from 'framer-motion';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false); // Inicialmente oculto

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Mostrar header después de hacer scroll más de 100px
      if (currentScrollY > 100) {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Añadir un retraso de 2 segundos para mostrar el header
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-10"
      initial={{ y: '-100%' }}
      animate={{ y: showHeader ? 0 : '-100%' }} // Controla la visibilidad del header
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <SlideTabsExample />
    </motion.header>
  );
};

export default Header;
