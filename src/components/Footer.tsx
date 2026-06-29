import { motion } from 'motion/react';
import { Hexagon, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden border-t border-white/10 mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-cyan-400" />
              <span className="font-display font-bold text-3xl tracking-tight">Orizon</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg font-light mb-8">
              Architecting the future of the web. We build high-performance, visually stunning digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <h3 className="text-xl font-display font-semibold mb-6 text-white text-left md:text-right w-full">Initialize Communication</h3>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="mailto:ambarpreet2611@gmail.com" className="flex items-center gap-4 group glass-panel px-6 py-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-gray-400 mb-1">Direct Transmission</div>
                  <div className="text-lg font-medium text-gray-200">ambarpreet2611@gmail.com</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 ml-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              <a href="tel:9888082205" className="flex items-center gap-4 group glass-panel px-6 py-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-gray-400 mb-1">Secure Comms Line</div>
                  <div className="text-lg font-medium text-gray-200">98880 82205</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 ml-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Orizon. All systems operational.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
