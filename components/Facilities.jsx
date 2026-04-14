"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Facilities() {
  return (
    <section className="facilities" id="instalaciones">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nuestras <span>Instalaciones</span></h2>
          <p>Equipamiento de primer nivel en un espacio diseñado para tu máximo rendimiento.</p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8 }}
        >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/assets/img1.jpeg" alt="Ares Gym Instalaciones 1" />
                <div className="slide-caption">Equipamiento Premium</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img2.jpeg" alt="Ares Gym Instalaciones 2" />
                <div className="slide-caption">Zona de Peso Libre</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img3.jpeg" alt="Ares Gym Instalaciones 3" />
                <div className="slide-caption">Amplio Espacio de Entrenamiento</div>
              </SwiperSlide>
            </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
