import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPlay, FaServer, FaShieldAlt } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
      
      {/* --- Background Effects (Sama seperti sebelumnya) --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)' 
        }}>
      </div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      {/* --- MAIN CONTAINER --- */}
      {/* PERUBAHAN DISINI: px-8 (mobile), px-16 (tablet), px-24 (desktop) agar tidak dempet */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Content --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-200">v2.0 Available Globally</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Build Faster with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm">
                Powerful Cloud
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Deploy your applications in seconds with our next-gen infrastructure. 
              Experience <span className="text-blue-300 font-semibold">99.99% uptime</span> and 
              <span className="text-purple-300 font-semibold"> enterprise-grade security</span> out of the box.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-blue-600 rounded-full font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all w-full sm:w-auto overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <div className="flex items-center justify-center gap-2">
                  <FaRocket /> Start Building
                </div>
              </button>
              
              <button className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all w-full sm:w-auto flex items-center justify-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPlay className="text-xs ml-0.5" /> 
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-8">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold ring-2 ring-slate-900`}>
                      U{i}
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white ring-2 ring-slate-900">
                    +2k
                 </div>
               </div>
               <div className="text-left">
                  <p className="text-sm font-bold text-white">Trusted by Developers</p>
                  <div className="flex text-yellow-500 text-xs">★★★★★</div>
               </div>
            </motion.div>
          </motion.div>

          {/* --- Right Content (Dashboard Mockup) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: -6, rotateX: 2 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative hidden lg:block perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform translate-y-4 translate-x-4 -z-10"></div>

            <div className="relative z-10 bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    server-status: active
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <FaServer />
                    </div>
                    <span className="text-xs text-green-400">+12%</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-1">Total Requests</div>
                  <div className="text-2xl font-bold text-white">2.4M</div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                        <FaShieldAlt />
                    </div>
                    <span className="text-xs text-green-400">-2ms</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-1">Avg. Latency</div>
                  <div className="text-2xl font-bold text-white">14ms</div>
                </div>
              </div>

              <div className="relative h-48 bg-slate-800/30 rounded-xl border border-white/5 flex items-end justify-between p-4 gap-3 overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-between py-4 px-4 opacity-10 pointer-events-none">
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                </div>

                {[35, 55, 45, 70, 60, 75, 50, 90, 85, 65].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.05), ease: "backOut" }}
                    className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-sm relative group"
                  >
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl z-20 flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xl border border-green-500/30">
                <FaRocket />
              </div>
              <div>
                <div className="text-xs text-slate-400">Deployment</div>
                <div className="text-sm font-bold text-white">Success!</div>
                <div className="text-[10px] text-slate-500 mt-1">Just now</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;