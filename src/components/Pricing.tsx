import { motion } from 'motion/react';
import { Check, Cpu, Layout, Server, Shield, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Frontend Architecture',
    price: '5,999',
    description: 'High-performance, visually stunning client-side applications built for maximum engagement.',
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    features: [
      'Modern UI/UX Interface Design',
      'Fluid Animations & Interactions',
      'Fully Responsive Layouts',
      'Core SEO Optimization',
      'High-Speed Asset Delivery',
      '7-Day Delivery Timeline'
    ]
  },
  {
    name: 'Full-Stack Ecosystem',
    price: '11,999',
    description: 'End-to-end digital platforms with robust server architectures and database infrastructure.',
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    popular: true,
    features: [
      'Everything in Frontend Architecture',
      'Custom Backend API Development',
      'Relational Database Integration',
      'Secure User Authentication',
      'Admin Dashboard Control',
      'Advanced Security Implementation'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Transparent <span className="text-gradient">Investment.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Elite digital engineering solutions structured for growth. We deliver uncompromising quality at deterministic price points.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative glass-panel rounded-3xl p-8 flex flex-col ${
                tier.popular ? 'border-indigo-500/30 bg-indigo-500/5' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                    Recommended Architecture
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {tier.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">{tier.name}</h3>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-400 text-2xl">₹</span>
                  <span className="text-5xl font-display font-bold tracking-tight">{tier.price}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{tier.description}</p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-display font-semibold transition-all flex items-center justify-center gap-2 ${
                tier.popular 
                  ? 'bg-white text-gray-950 hover:scale-[1.02]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
              }`}>
                Initialize Protocol
                <Zap className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
