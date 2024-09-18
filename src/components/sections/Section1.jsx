// src/components/sections/Section1.jsx
import React from "react";

const Section1 = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <video
        src="/videos/sirenas.mp4"
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <h1 className="text-white absolute inset-0 flex items-center justify-center text-5xl">
        Yoga Danza Pilates
      </h1>
    </div>
  );
};

export default Section1;
