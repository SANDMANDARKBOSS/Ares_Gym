"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Pricing() {
  const [membresias, setMembresias] = useState(null);
  const WHATSAPP_NUMBER = "593998191554";

  useEffect(() => {
    fetch('/json/app.json')
      .then(res => res.json())
      .then(data => setMembresias(data.membresias))
      .catch(console.error);
  }, []);

  const renderCard = (plan, isCompact = false) => {
    const waMessage = encodeURIComponent(`Hola Carlos, me interesa el plan deportivo ${plan.titulo} de ${plan.precio}. Necesito más información para inscribirme a Ares Gym.`);
    return (
      <motion.div 
        key={plan.id}
        className={`pricing-card ${plan.destacado ? 'popular' : ''} ${isCompact ? 'compact' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {plan.badge && <div className="badge">{plan.badge}</div>}
        <h3>{plan.titulo}</h3>
        <div className="price">
           <span className="currency">$</span>
           <span className="amount">{plan.precio.replace('$', '')}</span>
           <span className="period">{plan.periodo}</span>
        </div>
        <ul className="features">
          {plan.incluye.map((f, i) => (
            <li key={i}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {f}
            </li>
          ))}
        </ul>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`} target="_blank" className={`btn ${plan.destacado ? 'btn-primary' : 'btn-outline'}`}>
          Elegir Plan
        </a>
      </motion.div>
    );
  };

  if (!membresias) return null;

  return (
    <section className="pricing" id="planes">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Planes y <span>Membresías</span></h2>
          <p className="pricing-subtitle-main" dangerouslySetInnerHTML={{ __html: membresias.nota }}></p>
        </motion.div>
        
        <h3 className="pricing-subtitle">Membresías Mensuales Estándar</h3>
        <div className="pricing-grid desktop-only">
          {membresias.mensuales.map(plan => renderCard(plan))}
        </div>
        <div className="mobile-only pricing-swiper">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {membresias.mensuales.map(plan => (
              <SwiperSlide key={plan.id}>{renderCard(plan)}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3 className="pricing-subtitle mt-5">Ahorra con Planes a Largo Plazo</h3>
        <div className="pricing-grid desktop-only">
          {membresias.largoPlazo.map(plan => renderCard(plan, true))}
        </div>
        <div className="mobile-only pricing-swiper">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {membresias.largoPlazo.map(plan => (
              <SwiperSlide key={plan.id}>{renderCard(plan, true)}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {membresias.especiales && membresias.especiales.length > 0 && (
          <div className="special-plans-container" style={{ marginTop: '40px', textAlign: 'center' }}>
             <h3 className="pricing-subtitle">Planes de Corto Plazo</h3>
             <div className="pricing-grid desktop-only" style={{ justifyContent: 'center', marginTop: '20px' }}>
                {membresias.especiales.map(plan => renderCard(plan, true))}
             </div>
             <div className="mobile-only pricing-swiper" style={{ marginTop: '20px' }}>
               <Swiper
                 effect={'cards'}
                 grabCursor={true}
                 modules={[EffectCards]}
                 className="mySwiper"
               >
                 {membresias.especiales.map(plan => (
                   <SwiperSlide key={plan.id}>{renderCard(plan, true)}</SwiperSlide>
                 ))}
               </Swiper>
             </div>
          </div>
        )}
        
        <motion.div 
           className="pricing-cta"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p>¿Tienes dudas sobre cuál plan es el adecuado para ti?</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20tengo%20dudas%20sobre%20los%20planes%20mensuales%20de%20Ares%20Gym.`} target="_blank" className="btn btn-outline">Escríbenos por WhatsApp</a>
        </motion.div>
      </div>
    </section>
  );
}
