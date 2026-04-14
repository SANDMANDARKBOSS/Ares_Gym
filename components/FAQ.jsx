"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "¿Qué incluye la toma de medidas antropométricas?",
      a: "Realizamos un análisis completo 2 veces al mes para medir tu porcentaje de grasa, masa muscular y composición corporal. Esto nos permite ajustar tu entrenamiento y nutrición de forma milimétrica para garantizar resultados 100% comprobables."
    },
    {
      q: "¿Necesito experiencia previa en el gimnasio?",
      a: "No, ¡para nada! El head coach Carlos Rosero te guiará desde el primer día, asegurando que aprendas la técnica correcta (biomecánica) para evitar lesiones y potenciar el desarrollo de tu fuerza desde cero."
    },
    {
      q: "¿El asesoramiento nutricional básico tiene algún costo extra?",
      a: "Te tenemos cubierto. Todos nuestros planes continuos (mensuales, semestrales y anuales) ya incluyen el asesoramiento nutricional y los controles de medidas completamente gratis en tu mensualidad."
    },
    {
      q: "¿Puedo acceder a las tarifas promocionales si vengo con amigos después?",
      a: "Totalmente. Manejamos planes grupales flexibles. Si la próxima semana traes a uno o más amigos, tu mensualidad siguiente baja automáticamente a $25, o hasta $20 por persona a si son un grupo de 4 integranes en adelante."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="preguntas">
      <div className="container">
        <motion.div 
           className="section-header"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2>Preguntas <span>Frecuentes</span></h2>
          <p>Las dudas más comunes de nuestros clientes resueltas para que empieces hoy mismo sin excusas.</p>
        </motion.div>
        
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <motion.div 
               key={index}
               className={`faq-item ${activeIndex === index ? 'active' : ''}`}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <h3>{faq.q}</h3>
                <span className="faq-icon" style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block', transition: '0.3s' }}>+</span>
              </div>
              <AnimatePresence>
                 {activeIndex === index && (
                   <motion.div 
                     className="faq-answer"
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <p style={{ padding: '0 1.5rem 1.5rem 1.5rem', margin: 0, color: 'var(--steel)' }}>{faq.a}</p>
                   </motion.div>
                 )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
