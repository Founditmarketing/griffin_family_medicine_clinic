import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Paperwork = () => {
  const forms = [
    { name: "New Patient Registration", size: "1.2 MB", type: "PDF" },
    { name: "Medical History Form", size: "850 KB", type: "PDF" },
    { name: "HIPAA Privacy Notice", size: "420 KB", type: "PDF" },
    { name: "Insurance Authorization", size: "310 KB", type: "PDF" },
    { name: "Telehealth Consent Form", size: "540 KB", type: "PDF" },
  ];

  return (
    <div className="pt-32 pb-24 bg-medical-gray bg-dot-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-medical-red font-bold uppercase tracking-[0.2em] text-sm mb-4">For New Patients</p>
            <h1 className="text-4xl md:text-6xl font-bold text-medical-slate mb-6">
              Patient <span className="text-medical-red">Paperwork</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Download and complete your forms before your visit to save time and ensure a smooth check-in process.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] shadow-premium border border-gray-100 overflow-hidden hover:shadow-premium-hover transition-all duration-500"
            >
              {/* Red top accent */}
              <div className="h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-medical-red/10 rounded-xl flex items-center justify-center">
                    <FileText className="text-medical-red w-5 h-5" />
                  </div>
                  Available Forms
                </h2>
                <div className="space-y-4">
                  {forms.map((form, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center justify-between p-6 bg-medical-gray rounded-2xl group hover:bg-medical-red/5 border border-transparent hover:border-medical-red/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:text-medical-red transition-colors border border-gray-100">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-medical-slate">{form.name}</h4>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{form.type} • {form.size}</p>
                        </div>
                      </div>
                      <Link to="/forms-viewer" className="p-4 bg-white rounded-xl shadow-premium hover:bg-medical-red hover:text-white transition-all duration-500 group-hover:-translate-y-1 border border-gray-100">
                        <Download className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-medical-slate p-8 md:p-12 text-white relative overflow-hidden border-double-red">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none mix-blend-overlay z-0" />
                <div className="absolute top-0 left-0 right-0 h-px bg-medical-red/40 z-0" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Download All Forms</h3>
                    <p className="text-white/50 text-sm">Get the complete new patient packet in one click.</p>
                  </div>
                  <Link to="/forms-viewer" className="bg-medical-red px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-medical-red-dark transition-all duration-500 shadow-glow-red hover:-translate-y-1 shrink-0">
                    <Download className="w-5 h-5" />
                    Download Complete Packet
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="premium-card p-10 relative overflow-hidden"
            >
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
              <h3 className="text-xl font-bold mb-8">Instructions</h3>
              <div className="space-y-8">
                {[
                  { title: "Print & Fill", desc: "Print the forms and fill them out clearly using black or blue ink." },
                  { title: "Bring Insurance", desc: "Remember to bring your current insurance card and a photo ID." },
                  { title: "Arrive Early", desc: "Please arrive 15 minutes before your scheduled appointment time." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-medical-red/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="text-medical-red w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-medical-slate rounded-[40px] p-10 text-white relative overflow-hidden group noise-overlay shadow-premium border-double-red"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-medical-red/20 rounded-2xl flex items-center justify-center mb-6 border border-medical-red/20">
                  <Clock className="text-medical-red w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-white/60 text-sm mb-8">
                  If you have any questions about the forms or need assistance, our staff is here to help.
                </p>
                <a href="tel:3184458380" className="text-medical-red font-bold flex items-center gap-2 hover:text-rose-400 transition-colors">
                  Call (318) 445-8380
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
