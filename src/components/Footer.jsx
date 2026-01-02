import React from 'react';
import { FaCloud, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/[0.02] pointer-events-none whitespace-nowrap select-none">
        HORE CLOUD
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <FaCloud className="text-primary" />
              <span>Hore Cloud</span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              Empowering the next generation of digital businesses with high-performance, secure, and scalable cloud infrastructure.
            </p>
            <div className="flex gap-4">
              {[FaGithub, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest cloud trends.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary/50 text-white"
              />
              <button className="btn btn-primary rounded-lg px-4">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2025 PT HORA HORE. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
