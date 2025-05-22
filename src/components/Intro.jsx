import React, { useEffect, useState } from 'react';
import './styles/Intro.css';

const Intro = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Avisa a App que termine la intro
    }, 3000); // 3 segundos de intro

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="intro-container">
      <h1 className="intro-text">RAUL JOUMAN</h1>
    </div>
  );
};


export default Intro;
