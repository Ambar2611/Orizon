import { motion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-cyan-400" />
            <span className="font-display font-bold text-xl tracking-tight">Orizon</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Investment</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Initialize</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
