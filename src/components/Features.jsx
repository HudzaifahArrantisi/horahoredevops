import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaDatabase, FaShieldAlt, FaServer, FaCode, FaHeadset, FaBolt, FaLock } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything you need to <br /><span className="text-gradient">Scale Globally</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Our infrastructure is built for high-performance applications that demand reliability, security, and speed.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card - Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <FaBolt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast Performance</h3>
              <p className="text-slate-400 max-w-md">Powered by latest generation NVMe SSDs and high-frequency CPUs to ensure your applications run at peak performance.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Visual Element */}
            <div className="absolute right-8 top-8 hidden lg:block">
              <div className="flex gap-2 items-end h-24">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <div key={i} className="w-4 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tall Card - Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:border-secondary/50 transition-colors"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-slate-400 mb-8">Advanced DDoS protection, automated firewalls, and ISO 27001 certified data centers.</p>
              
              <div className="mt-auto bg-slate-900/50 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3 mb-3 text-sm text-green-400">
                  <FaLock /> End-to-End Encrypted
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm text-green-400">
                  <FaShieldAlt /> WAF Enabled
                </div>
                <div className="flex items-center gap-3 text-sm text-green-400">
                  <FaCode /> Auto-Patching
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-secondary/5 pointer-events-none"></div>
          </motion.div>

          {/* Medium Card - Global CDN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-accent/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <FaCloudUploadAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Edge Network</h3>
            <p className="text-slate-400 text-sm">Deploy close to your users with our 200+ PoPs worldwide.</p>
          </motion.div>

          {/* Medium Card - Database */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <FaDatabase className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Managed Databases</h3>
            <p className="text-slate-400 text-sm">Automated backups, scaling, and updates for your data.</p>
          </motion.div>

          {/* Wide Card - Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                <FaHeadset className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">24/7 Expert Support</h3>
                <p className="text-slate-400">Our engineers are ready to help you solve any infrastructure challenge.</p>
              </div>
            </div>
            <button className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-slate-900 rounded-full px-8">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
