"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
                        <p className="subtitle">Carlos Rosero - Head Coach y Fundador</p>
                    </motion.div>
                    <motion.p 
                      className="founder-bio"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        En Ares Gym no solo vienes a levantar pesas; vienes a transformar tu cuerpo bajo un estricto criterio científico y profesional. Carlos Rosero ha enfocado toda su carrera en perfeccionar el arte del desarrollo muscular, la recomposición corporal y el aumento de fuerza real.
                    </motion.p>
                    <ul className="founder-credentials">
                        <motion.li
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <strong>Especialista en Biomecánica:</strong> Ejecución técnica perfecta y prevención de lesiones en cada movimiento.
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <strong>Nutrición y Medidas:</strong> Asesoría nutricional constante y toma de medidas antropométricas cada 15 días.
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <strong>Fuerza e Hipertrofia:</strong> Rutinas avanzadas diseñadas meticulosamente para lograr resultados insuperables.
                        </motion.li>
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
