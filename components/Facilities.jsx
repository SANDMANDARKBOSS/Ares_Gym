"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "/assets/ares-gym-5.jpeg",
    title: "Entrena Sin Límites",
    description: "Equipamiento profesional y un ambiente diseñado exclusivamente para superar tus metas más ambiciosas."
  },
  {
    image: "/assets/ares-gym-6.jpeg",
    title: "Fuerza & Disciplina",
    description: "Construye tu mejor versión con maquinaria de última generación y un enfoque en resultados reales."
  },
  {
    image: "/assets/ares-gym-7.jpeg",
    title: "Resultados Reales",
    description: "Cada rincón de nuestras instalaciones está optimizado para una transformación física total."
  },
  {
    image: "/assets/ares-gym-8.jpeg",
    title: "Espacio Élite",
    description: "Diseño industrial y motivador pensado para tu máxima concentración y rendimiento."
  }
];

export default function Facilities() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Cambio cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="facilities-cinematic" id="instalaciones">
      <div className="section-header container">
          <h2>Nuestras <span>Instalaciones</span></h2>
          <p>Explora el espacio donde transformarás tu cuerpo.</p>
      </div>

      <div className="cinematic-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="cinematic-slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Imagen de fondo */}
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="cinematic-img"
            />

            {/* Overlay Cinematográfico */}
            <div className="cinematic-overlay" />

            {/* Contenido con entrada escalonada */}
            <div className="cinematic-content">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="cinematic-title"
              >
                {slides[index].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="cinematic-desc"
              >
                {slides[index].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="cinematic-actions"
              >
                <a href="#planes" className="btn-netflix-primary">
                  🔥 Entrenar ahora
                </a>
                <a href="https://wa.me/593998191554" target="_blank" className="btn-netflix-secondary">
                  Más Info
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de progreso (Netflix Style) */}
        <div className="cinematic-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`indicator-dot ${i === index ? "active" : ""}`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
