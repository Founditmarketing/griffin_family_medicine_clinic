import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Info, CheckCircle, ExternalLink } from 'lucide-react';

export const CovidInfo = () => {
  return (
    <div className="pt-32 pb-24 bg-medical-gray bg-dot-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[40px] mb-16 relative overflow-hidden shadow-premium"
        >
          {/* Gradient background with dot pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-medical-red/10 via-rose-50 to-white" />
          <div className="absolute inset-0 bg-dot-grid opacity-60" />
          {/* Left red accent border */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-medical-red to-rose-400" />
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red via-rose-400 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 border border-medical-red/10 rounded-[40px]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-medical-red/10 rounded-2xl flex items-center justify-center border border-medical-red/20">
                <ShieldAlert className="text-medical-red w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-medical-slate">COVID-19 Updates</h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Griffin Family Medicine Clinic is committed to the safety of our patients and staff. We continue to monitor CDC guidelines and implement best practices for your protection.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-red/10 rounded-xl flex items-center justify-center">
                  <Info className="text-medical-red w-5 h-5" />
                </div>
                Current Clinic Protocols
              </h2>
              <ul className="space-y-4">
                {[
                  "Masks are optional but recommended for symptomatic patients.",
                  "Telehealth appointments are available for most respiratory symptoms.",
                  "Enhanced cleaning protocols remain in place throughout the facility.",
                  "We ask that you limit the number of companions to one person if necessary."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 p-4 bg-medical-gray rounded-2xl">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
              <h2 className="text-2xl font-bold mb-6">Vaccination Information</h2>
              <p className="text-gray-600 mb-6">
                We provide COVID-19 vaccinations and boosters. Please call our office to check availability and schedule your appointment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-medical-gray rounded-2xl border border-gray-100 hover:border-medical-red/20 transition-colors">
                  <h4 className="font-bold mb-2">Initial Series</h4>
                  <p className="text-sm text-gray-500">Available for eligible patients ages 5 and up.</p>
                </div>
                <div className="p-6 bg-medical-gray rounded-2xl border border-gray-100 hover:border-medical-red/20 transition-colors">
                  <h4 className="font-bold mb-2">Bivalent Boosters</h4>
                  <p className="text-sm text-gray-500">Recommended for most patients 6 months after last dose.</p>
                </div>
              </div>
            </motion.section>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-medical-slate p-10 rounded-[32px] text-white relative overflow-hidden noise-overlay shadow-premium border-double-red"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Testing Services</h3>
                <p className="text-white/60 mb-8 text-sm">
                  We offer rapid antigen and PCR testing for symptomatic patients and travel requirements.
                </p>
                <button className="w-full bg-medical-red py-4 rounded-xl font-bold hover:bg-medical-red-dark transition-all shadow-glow-red hover:-translate-y-1 duration-500">
                  Schedule a Test
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
              <h3 className="text-xl font-bold mb-6">Helpful Resources</h3>
              <div className="space-y-4">
                <a href="https://www.cdc.gov" target="_blank" className="flex items-center justify-between p-4 bg-medical-gray rounded-xl hover:bg-medical-red/5 border border-transparent hover:border-medical-red/10 transition-all group">
                  <span className="font-semibold text-sm">CDC Website</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-medical-red" />
                </a>
                <a href="https://ldh.la.gov" target="_blank" className="flex items-center justify-between p-4 bg-medical-gray rounded-xl hover:bg-medical-red/5 border border-transparent hover:border-medical-red/10 transition-all group">
                  <span className="font-semibold text-sm">Louisiana Dept of Health</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-medical-red" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
