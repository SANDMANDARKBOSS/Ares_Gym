"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  { src: "/assets/ares-gym-1.jpeg" },
  { src: "/assets/ares-gym-2.jpeg" },
  { src: "/assets/ares-gym-3.jpeg" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio">
      {/* Fondo con Transición Suave */}
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={heroSlides[index].src} alt="Gym" />
            <div className="hero-overlay" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container hero-container">
        <div className="hero-main">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="dot"></span> LIVE: POTENCIA PURA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            SUPERANDO<br/>TUS <span>LÍMITES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Siente el poder del entrenamiento de élite. Equipamiento profesional y un entorno diseñado exclusivamente para resultados reales.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#planes" className="btn btn-primary">Ver Planes</a>
            <a href="#horarios" className="btn btn-outline">Ver Horarios</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-stats-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat">
            <span className="val">+50</span>
            <span className="lbl">Máquinas</span>
          </div>
          <div className="sep"></div>
          <div className="stat">
            <span className="val">24/7</span>
            <span className="lbl">Asesoría</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>DESLIZA</span>
      </div>
    </section>
  );
}
