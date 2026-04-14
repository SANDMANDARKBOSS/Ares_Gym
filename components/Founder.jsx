"use client";
import React from 'react';
import { motion } from 'framer-motion';

const credentials = [
  {
    title: "Técnico en Actividad Física, Deportiva y Recreación",
    institution: "Tecnológico Universitario Pichincha"
  },
  {
    title: "Formación en Nutrición Deportiva",
    institution: "ESHI — European Sports Health Institute"
  },
  {
    title: "Principios del Entrenamiento de la Hipertrofia",
    institution: "ESHI — European Sports Health Institute"
  },
  {
    title: "Certificación Congreso Internacional de Ciencias, Innovación y Gestión Académica",
    institution: "Centro de Educación Continua del ITSHCPP"
  },
  {
    title: "Principios y Fundamentos de Anatomía y Fisiología Aplicada al Fisicoculturismo",
    institution: "ESHI — European Sports Health Institute"
  }
];

export default function Founder() {
  return (
    <section className="about-founder" id="entrenador">
        <div className="container">
            <div className="founder-grid">
                <motion.div 
                  className="founder-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                    <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" alt="Entrenador Fundador" />
                    <div className="experience-badge">
                        <span className="years">+5</span>
                        <span className="text">Años de<br/>Experiencia</span>
                    </div>
                </motion.div>
                <div className="founder-content">
                    <motion.div 
                      className="section-header text-left"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8 }}
                    >
                        <h2>Conoce a tu <span>Entrenador</span></h2>
                        <p className="subtitle">Carlos Giovanny Rosero Palacios — Head Coach y Fundador</p>
                    </motion.div>
                    <motion.p 
                      className="founder-bio"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        En Ares Gym no solo vienes a levantar pesas; vienes a transformar tu cuerpo bajo un estricto criterio científico y profesional. Carlos Giovanny Rosero Palacios ha enfocado toda su carrera en perfeccionar el arte del desarrollo muscular, la recomposición corporal y el aumento de fuerza real.
                    </motion.p>
                    <ul className="founder-credentials">
                        {credentials.map((cred, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              <div>
                                <strong>{cred.title}</strong>
                                <br/>
                                <span style={{ color: 'var(--steel)', fontSize: '0.85rem' }}>{cred.institution}</span>
                              </div>
                          </motion.li>
                        ))}
                    </ul>
                    <motion.a 
                      href="https://wa.me/593998191554?text=Hola%20Carlos,%20quiero%20empezar%20mi%20entrenamiento%20en%20Ares%20Gym!" 
                      target="_blank" 
                      className="btn btn-primary mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Contáctame por WhatsApp
                    </motion.a>
                </div>
            </div>
        </div>
    </section>
  );
}
