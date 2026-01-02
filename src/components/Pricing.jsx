import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? 239 : 299,
      description: 'Perfect for side projects',
      features: [
        { name: '10GB NVMe Storage', included: true },
        { name: '1 vCPU & 2GB RAM', included: true },
        { name: '1 Domain Gratis', included: true },
        { name: 'Free SSL', included: true },
        { name: 'Priority Support', included: false },
        { name: 'DDoS Protection', included: false },
      ],
      recommended: false
    },
    {
      name: 'Business',
      price: isYearly ? 719 : 899,
      description: 'For growing businesses',
      features: [
        { name: '100GB NVMe Storage', included: true },
        { name: '4 vCPU & 8GB RAM', included: true },
        { name: '3 Domain Gratis', included: true },
        { name: 'Free SSL', included: true },
        { name: 'Priority Support 24/7', included: true },
        { name: 'Advanced DDoS', included: true },
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: isYearly ? 1599 : 1999,
      description: 'For mission-critical apps',
      features: [
        { name: '1TB NVMe Storage', included: true },
        { name: '8 vCPU & 16GB RAM', included: true },
        { name: '10 Domain Gratis', included: true },
        { name: 'Free SSL', included: true },
        { name: 'Dedicated Support', included: true },
        { name: 'Enterprise DDoS', included: true },
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
          <p className="text-slate-400 text-lg mb-8">Choose the plan that fits your needs. No hidden fees.</p>
          
          <div className="inline-flex items-center p-1 bg-slate-900 rounded-full border border-white/10">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-white/10 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-xs ml-1 opacity-80">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-3xl p-8 relative transition-all duration-300 ${plan.recommended ? 'border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' : 'hover:border-white/20'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">Rp {plan.price}</span>
                  <span className="text-slate-500 mb-1">/mo</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <FaCheck className="text-xs" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-600 flex-shrink-0">
                        <FaTimes className="text-xs" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>{feature.name}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
