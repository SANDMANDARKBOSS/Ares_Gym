"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <motion.div 
        className="nav-container edge-to-edge"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <a href="#" className="logo-container">
          <img src="/assets/logo.jpeg" alt="Ares Gym Logo" />
          <div className="logo-text">ARES <span>GYM</span></div>
        </a>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#entrenador" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#instalaciones" onClick={() => setMenuOpen(false)}>Instalaciones</a></li>
            <li><a href="#horarios" onClick={() => setMenuOpen(false)}>Horarios</a></li>
            <li><a href="#planes" onClick={() => setMenuOpen(false)}>Membresías</a></li>
            <li><a href="#preguntas" onClick={() => setMenuOpen(false)}>Dudas Frecuentes</a></li>
            <li>
              <a href="https://wa.me/593998191554?text=Hola%20Carlos,%20me%20gustar%C3%ADa%20unirme%20a%20Ares%20Gym." 
                 target="_blank" 
                 className="btn btn-primary join-btn">
                Únete Ahora
              </a>
            </li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
