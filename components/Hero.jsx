"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <motion.img 
        src="/assets/logo.jpeg" 
        alt="Ares Gym Logo Watermark" 
        className="hero-watermark"
        initial={{ scale: 0.8, opacity: 0, y: "-50%", rotate: -5 }}
        animate={{ scale: 1, opacity: 0.15, y: "-50%", rotate: -5 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      />

      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            SUPERANDO<br/>TUS <span>LÍMITES</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            El mejor equipamiento y un entorno diseñado exclusivamente para resultados serios. Tu dedicación merece un lugar de alto rendimiento.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            <a href="#planes" className="btn btn-primary">Ver Planes</a>
            <a href="#horarios" className="btn btn-outline">Ver Horarios</a>
          </motion.div>
        </div>
        
        <div className="hero-images desktop-only">
          <motion.img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
            className="hero-img img-1" 
            alt="Hombre levantando pesas gimnasio"
            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
            animate={{ scale: 1, opacity: 1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
          />
          <motion.img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" 
            className="hero-img img-2" 
            alt="Mancuernas gimnasio"
            initial={{ scale: 0.8, opacity: 0, rotate: -5, y: 50 }}
            animate={{ scale: 1, opacity: 1, rotate: -5, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
          />
          <motion.img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
            className="hero-img img-3" 
            alt="Hombre entrenando crossfit"
            initial={{ scale: 0.8, opacity: 0, rotate: 5, x: -50 }}
            animate={{ scale: 1, opacity: 1, rotate: 5, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
          />
        </div>

        <div className="hero-swiper-mobile mobile-only">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" alt="Hombre levantando pesas gimnasio" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" alt="Mancuernas gimnasio" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" alt="Hombre entrenando crossfit" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
