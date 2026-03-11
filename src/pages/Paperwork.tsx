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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-medical-slate mb-6"
          >
            Patient <span className="text-medical-red">Paperwork</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Download and complete your forms before your visit to save time and ensure a smooth check-in process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <FileText className="text-medical-red" />
                  Available Forms
                </h2>
                <div className="space-y-4">
                  {forms.map((form, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-medical-gray rounded-2xl group hover:bg-medical-red/5 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:text-medical-red transition-colors">
                          <FileText />
                        </div>
                        <div>
                          <h4 className="font-bold text-medical-slate">{form.name}</h4>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{form.type} • {form.size}</p>
                        </div>
                      </div>
                      <Link to="/forms-viewer" className="p-4 bg-white rounded-xl shadow-sm hover:bg-medical-red hover:text-white transition-all">
                        <Download className="w-5 h-5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-medical-slate p-8 md:p-12 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Download All Forms</h3>
                    <p className="text-white/50 text-sm">Get the complete new patient packet in one click.</p>
                  </div>
                  <Link to="/forms-viewer" className="bg-medical-red px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-medical-red-dark transition-all">
                    <Download className="w-5 h-5" />
                    Download Complete Packet
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-medical-gray p-10 rounded-[40px] border border-gray-100">
              <h3 className="text-xl font-bold mb-8">Instructions</h3>
              <div className="space-y-8">
                {[
                  { title: "Print & Fill", desc: "Print the forms and fill them out clearly using black or blue ink." },
                  { title: "Bring Insurance", desc: "Remember to bring your current insurance card and a photo ID." },
                  { title: "Arrive Early", desc: "Please arrive 15 minutes before your scheduled appointment time." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="text-medical-red shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-medical-red/5 p-10 rounded-[40px] border border-medical-red/10">
              <Clock className="text-medical-red w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-8">
                If you have any questions about the forms or need assistance, our staff is here to help.
              </p>
              <a href="tel:3184458380" className="text-medical-red font-bold flex items-center gap-2">
                Call (318) 445-8380
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
