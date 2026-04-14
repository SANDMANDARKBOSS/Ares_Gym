"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-grid">
          <motion.div 
             className="footer-brand"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <a href="#" className="logo-container footer-logo">
               <img src="/assets/logo.jpeg" alt="Ares Gym Logo" />
               <div className="logo-text">ARES <span>GYM</span></div>
            </a>
            <p className="footer-desc">El mejor equipamiento y un entorno diseñado exclusivamente para resultados serios en Quito. Únete a la élite del fitness.</p>
            <div className="social-links mt-4">
              <a href="https://www.facebook.com/share/1E4ScKDudr/?mibextid=wwXIfr" target="_blank" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/aress_gym?igsh=MTgzMG9wMjRvZjFicA==" target="_blank" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
             className="footer-contact"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <h3 className="footer-title">Contacto</h3>
            <ul className="contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="https://wa.me/593998191554" target="_blank" className="footer-link hover-red">+593 99 819 1554</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:carlos_rosero_p@hotmail.com" className="footer-link hover-red">carlos_rosero_p@hotmail.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <a href="https://maps.app.goo.gl/BG1TzP46p1HxHGJ5A" target="_blank" className="footer-link hover-red">Manuela Garaycoa, 170184<br/>Quito, Ecuador</a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
             className="footer-map-container"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
          >
            <h3 className="footer-title">Ubicación</h3>
            <div className="map-wrapper">
               <iframe src="https://maps.google.com/maps?q=QJWC%2BPC+Quito,+Ecuador&t=m&z=16&output=embed&iwloc=near" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               <a href="https://maps.app.goo.gl/BG1TzP46p1HxHGJ5A" target="_blank" className="map-overlay-btn" title="Abrir en Google Maps">
                  Abrir App <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
               </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
         <div className="container footer-bottom-inner">
             <p>&copy; 2026 Ares Gym. Todos los derechos reservados.</p>
             <div className="footer-legal">
                 <a href="#">Términos y Condiciones</a>
                 <a href="#">Política de Privacidad</a>
             </div>
         </div>
      </div>
    </footer>
  );
}
