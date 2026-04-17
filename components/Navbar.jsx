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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={scrolled ? 'scrolled premium-header' : 'premium-header'}>
      <motion.div 
        className="nav-container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#" className="logo-container">
          <img src="/assets/logo.jpeg" alt="Ares Gym Logo" className="nav-logo" />
          <div className="logo-text">ARES <span>GYM</span></div>
        </a>
        <nav>
          <div 
            className={`menu-overlay ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(false)}
          />
          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#entrenador" onClick={() => setMenuOpen(false)}>Coach</a></li>
            <li><a href="#instalaciones" onClick={() => setMenuOpen(false)}>Sede</a></li>
            <li><a href="#horarios" onClick={() => setMenuOpen(false)}>Horarios</a></li>
            <li><a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a></li>
            <li>
              <a href="https://wa.me/593998191554" 
                 target="_blank" 
                 className="btn btn-primary nav-cta">
                Únete
              </a>
            </li>
          </ul>
          <div className="menu-toggle-v2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
