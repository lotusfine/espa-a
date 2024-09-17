// src/components/Section.jsx
import React from 'react';

const Section = ({ color, title, children }) => {
  return (
    <section className={`flex items-center justify-center h-screen ${color}`}> {/* Agrega la clase de color directamente */}
      <div className="max-w-2xl text-center p-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
