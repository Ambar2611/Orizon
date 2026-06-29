import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Terminal, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-medium text-cyan-300 tracking-wider uppercase">Orizon Architecture</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-tight"
          >
            Engineering the <br className="hidden md:block" />
            <span className="text-gradient">Digital Frontier.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
          >
            Architecting the future of the web. We build high-performance, visually stunning digital experiences that elevate your business to the next dimension.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-white text-gray-950 font-medium rounded-full overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-display">Initiate Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#pricing" className="px-8 py-4 glass-panel font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 font-display">
              <Terminal className="w-4 h-4 text-cyan-400" />
              View Architecture
            </a>
          </motion.div>

          {/* Floating futuristic elements */}
          <div className="absolute top-1/4 right-[10%] hidden lg:block opacity-50">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-gray-400">Frontend</div>
                <div className="text-sm font-medium">React / Motion</div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-1/4 left-[10%] hidden lg:block opacity-50">
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-gray-400">Backend</div>
                <div className="text-sm font-medium">Node / Postgres</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
