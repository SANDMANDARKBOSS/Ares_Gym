"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Founder from '../components/Founder';
import Facilities from '../components/Facilities';
import Schedules from '../components/Schedules';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Facilities />
        <Schedules />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
