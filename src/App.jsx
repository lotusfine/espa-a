// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import EntryScreen from "./components/EntryScreen";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import BackgroundAudio from "./components/BackgroundAudio";


const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
  };

  return (
    <div>
      {!showContent ? (
        <EntryScreen onEnter={handleEnter} />
      ) : (
        <>
          <BackgroundAudio />
          <Header />
          
          <main>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6 }}
              className="section1-container"
            >
              <Section1 />
            </motion.div>
            <Section2 />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
