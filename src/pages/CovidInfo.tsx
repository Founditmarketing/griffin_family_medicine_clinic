import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Info, CheckCircle, ExternalLink } from 'lucide-react';

export const CovidInfo = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-medical-red/5 rounded-[40px] p-8 md:p-16 mb-16 border border-medical-red/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <ShieldAlert className="text-medical-red w-12 h-12" />
            <h1 className="text-4xl md:text-6xl font-bold text-medical-slate">COVID-19 Updates</h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Griffin Family Medicine Clinic is committed to the safety of our patients and staff. We continue to monitor CDC guidelines and implement best practices for your protection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Info className="text-medical-red" />
                Current Clinic Protocols
              </h2>
              <ul className="space-y-4">
                {[
                  "Masks are optional but recommended for symptomatic patients.",
                  "Telehealth appointments are available for most respiratory symptoms.",
                  "Enhanced cleaning protocols remain in place throughout the facility.",
                  "We ask that you limit the number of companions to one person if necessary."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Vaccination Information</h2>
              <p className="text-gray-600 mb-6">
                We provide COVID-19 vaccinations and boosters. Please call our office to check availability and schedule your appointment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-medical-gray rounded-2xl">
                  <h4 className="font-bold mb-2">Initial Series</h4>
                  <p className="text-sm text-gray-500">Available for eligible patients ages 5 and up.</p>
                </div>
                <div className="p-6 bg-medical-gray rounded-2xl">
                  <h4 className="font-bold mb-2">Bivalent Boosters</h4>
                  <p className="text-sm text-gray-500">Recommended for most patients 6 months after last dose.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-medical-slate p-10 rounded-[32px] text-white">
              <h3 className="text-xl font-bold mb-6">Testing Services</h3>
              <p className="text-white/60 mb-8 text-sm">
                We offer rapid antigen and PCR testing for symptomatic patients and travel requirements.
              </p>
              <button className="w-full bg-medical-red py-4 rounded-xl font-bold hover:bg-medical-red-dark transition-colors">
                Schedule a Test
              </button>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Helpful Resources</h3>
              <div className="space-y-4">
                <a href="https://www.cdc.gov" target="_blank" className="flex items-center justify-between p-4 bg-medical-gray rounded-xl hover:bg-medical-red/5 transition-colors group">
                  <span className="font-semibold text-sm">CDC Website</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-medical-red" />
                </a>
                <a href="https://ldh.la.gov" target="_blank" className="flex items-center justify-between p-4 bg-medical-gray rounded-xl hover:bg-medical-red/5 transition-colors group">
                  <span className="font-semibold text-sm">Louisiana Dept of Health</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-medical-red" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
