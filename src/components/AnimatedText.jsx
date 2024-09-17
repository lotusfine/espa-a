// src/components/AnimatedText.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="py-4"> {/* Elimina bg-neutral-100 o cualquier clase de fondo */}
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black p-1" // Elimina bg-white
      style={{ backgroundColor: 'transparent' }} // Asegura que el fondo sea transparente
    >
      <Tab setPosition={setPosition}>¿Quién soy?</Tab>
      <Tab setPosition={setPosition}>Propuesta</Tab>
      <Tab setPosition={setPosition}>Yoga</Tab>
      <Tab setPosition={setPosition}>Pilates</Tab>
      <Tab setPosition={setPosition}>Danza</Tab>
      <Tab setPosition={setPosition}>Precios</Tab>
      <Tab setPosition={setPosition}>Contacto</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
  
          const { width } = ref.current.getBoundingClientRect();
  
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 0.1,
          });
        }}
        className="relative z-10 block cursor-pointer px-2 py-1 text-xs uppercase text-black md:px-3 md:py 1 md:text-base"
      >
        {children}
      </li>
    );
  };
  
  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
          transition: { duration: 0.3 }, // Suavizar la transición
        }}
        className="absolute z-0 h-5 rounded-full bg-black md:h-8" // Ajusta el tamaño del cursor para que sea más pequeño
      />
    );
  };