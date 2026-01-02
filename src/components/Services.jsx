import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaDatabase, FaShieldAlt, FaServer, FaCode, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: FaCloudUploadAlt,
    title: 'Cloud Hosting',
    description: 'Hosting cloud dengan performa optimal, SSD NVMe, dan skalabilitas otomatis.',
    color: 'text-primary'
  },
  {
    icon: FaDatabase,
    title: 'Managed Database',
    description: 'Kelola database MySQL, PostgreSQL, MongoDB dengan replikasi otomatis.',
    color: 'text-secondary'
  },
  {
    icon: FaShieldAlt,
    title: 'Cloud Security',
    description: 'Firewall, DDoS protection, dan monitoring ancaman 24/7.',
    color: 'text-accent'
  },
  {
    icon: FaServer,
    title: 'VPS Enterprise',
    description: 'Virtual Private Server dengan dedicated resource dan akses root penuh.',
    color: 'text-info'
  },
  {
    icon: FaCode,
    title: 'Kubernetes',
    description: 'Orkestrasi container otomatis untuk aplikasi microservices Anda.',
    color: 'text-success'
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Tim ahli kami siap membantu Anda kapan saja, di mana saja.',
    color: 'text-warning'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="badge badge-primary badge-outline mb-2">Layanan Unggulan</div>
          <h2 className="text-4xl font-bold mb-4">Solusi Cloud <span className="text-primary">Komprehensif</span></h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan cloud yang dirancang untuk memenuhi kebutuhan bisnis modern dari startup hingga enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body">
                <div className={`text-4xl mb-4 ${service.color}`}>
                  <service.icon />
                </div>
                <h3 className="card-title text-xl mb-2">{service.title}</h3>
                <p className="text-base-content/70">{service.description}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-ghost btn-sm gap-2 group">
                    Selengkapnya 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
