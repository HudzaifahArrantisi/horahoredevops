import React from 'react';
import { motion } from 'framer-motion';
import { FaAmazon, FaGoogle, FaMicrosoft, FaSpotify, FaAirbnb, FaUber, FaAws, FaCloud } from 'react-icons/fa';

const partners = [
  { name: 'Amazon', icon: FaAmazon },
  { name: 'Google', icon: FaGoogle },
  { name: 'Microsoft', icon: FaMicrosoft },
  { name: 'Spotify', icon: FaSpotify },
  { name: 'Airbnb', icon: FaAirbnb },
  { name: 'Uber', icon: FaUber },
  { name: 'AWS', icon: FaAws },
];

export default function Partnership() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden flex flex-col justify-center items-center">
      
      {/* --- LAYER 1: DYNAMIC PARTNERS (Background Scrolling) --- */}
      {/* Kita buat agak transparan (opacity-30) agar tidak menabrak teks utama */}
      <div className="w-full relative z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap py-4"
            animate={{ x: "-50%" }}
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
          >
            {/* Duplikasi 4x untuk seamless loop tanpa putus */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center gap-3 text-4xl text-slate-400">
                <partner.icon />
                <span className="text-xl font-bold font-mono tracking-tighter">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};