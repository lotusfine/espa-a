// src/components/AnimatedText.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="py-4 pointer-events-auto"> {/* Permite eventos de mouse */}
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
      onMouseLeave={() => setPosition({ left: 0, width: 0, opacity: 0 })}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black p-1"
      style={{ backgroundColor: 'transparent', pointerEvents: 'auto' }}
    >
      {["¿Quién soy?", "Propuesta", "Yoga", "Pilates", "Danza", "Precios", "Contacto"].map((label, index) => (
        <Tab key={index} setPosition={setPosition}>{label}</Tab>
      ))}

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
      style={{ pointerEvents: 'auto' }}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
        transition: { duration: 0.3 },
      }}
      className="absolute z-0 h-5 rounded-full bg-black md:h-8"
      style={{ pointerEvents: 'none' }} // Evita que el cursor bloquee eventos del mouse
    />
  );
};
