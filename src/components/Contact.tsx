import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Terminal, CheckCircle2, AlertCircle, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'frontend',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone,
            tier: formData.tier, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', tier: 'frontend', message: '' });
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Failed to transmit data. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-6"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-medium text-cyan-300 tracking-wider uppercase">Secure Channel</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Initialize <span className="text-gradient">Protocol.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transmit your project parameters. Our engineering team will analyze your requirements and establish a direct communication link.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-indigo-500/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-indigo-500/50 rounded-br-3xl" />

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-emerald-300">Transmission Successful</h4>
                <p className="text-sm text-emerald-400/80 mt-1">Your parameters have been logged. We will establish contact shortly.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-red-300">Transmission Failed</h4>
                <p className="text-sm text-red-400/80 mt-1">{errorMessage}</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider pl-1">Identification</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider pl-1">Comms Link (Email)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider pl-1">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="tel" 
                    placeholder="+91 9876543210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider pl-1">Architecture Tier</label>
                <select 
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white appearance-none focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans cursor-pointer"
                >
                  <option value="frontend" className="bg-gray-900">Frontend Architecture (₹5,999)</option>
                  <option value="fullstack" className="bg-gray-900">Full-Stack Ecosystem (₹11,999)</option>
                  <option value="custom" className="bg-gray-900">Custom Enterprise Solution</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider pl-1">Project Parameters</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                <textarea 
                  rows={4}
                  placeholder="Detail your objectives, target audience, and functional requirements..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-4 bg-white text-gray-950 font-display font-bold rounded-xl overflow-hidden transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:hover:scale-100"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Transmitting...' : 'Transmit Data'}
              </span>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 relative z-10 animate-spin" />
              ) : (
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
