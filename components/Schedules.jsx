"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Schedules() {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    fetch('/json/app.json')
      .then(res => res.json())
      .then(data => setHorarios(data.horarios))
      .catch(console.error);
  }, []);

  return (
    <section className="schedules" id="horarios">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Nuestros <span>Horarios</span></h2>
          <p>Entrena en el momento que mejor se adapte a tu rutina.</p>
        </motion.div>
        <div className="schedule-grid">
          {horarios.map((schedule, index) => (
            <motion.div 
              key={schedule.id}
              className="schedule-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
                <div className="schedule-icon" dangerouslySetInnerHTML={{ __html: schedule.icono }}></div>
                <div>
                   <h3>{schedule.titulo}</h3>
                   <div className="time">{schedule.hora}</div>
                   <p>{schedule.descripcion}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
