import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-medical-gray bg-dot-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page header with decorative band */}
        <div className="relative text-center mb-16">
          {/* Horizontal accent lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-medical-red/20 to-transparent -z-10" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-medical-slate mb-6 inline-block bg-medical-gray px-8"
          >
            Get in <span className="text-medical-red">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[60px] shadow-premium border border-gray-100/50 relative overflow-hidden"
          >
            {/* Top red accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60" />
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-red/5 rounded-bl-[60px] pointer-events-none" />
            <div className="absolute top-5 right-5 w-4 h-4 bg-medical-red/30 rounded-full pointer-events-none" />

            <h2 className="text-3xl font-bold text-medical-slate mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-medical-gray border border-gray-200 focus:border-medical-red rounded-2xl p-4 focus:ring-2 focus:ring-medical-red/20 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-medical-gray border border-gray-200 focus:border-medical-red rounded-2xl p-4 focus:ring-2 focus:ring-medical-red/20 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Phone Number</label>
                <input type="tel" placeholder="(318) 000-0000" className="w-full bg-medical-gray border border-gray-200 focus:border-medical-red rounded-2xl p-4 focus:ring-2 focus:ring-medical-red/20 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Subject</label>
                <select className="w-full bg-medical-gray border border-gray-200 focus:border-medical-red rounded-2xl p-4 focus:ring-2 focus:ring-medical-red/20 transition-all outline-none appearance-none">
                  <option>Appointment Inquiry</option>
                  <option>General Question</option>
                  <option>Billing Question</option>
                  <option>Medical Records</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-medical-gray border border-gray-200 focus:border-medical-red rounded-2xl p-4 focus:ring-2 focus:ring-medical-red/20 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-medical-red text-white py-5 rounded-2xl font-bold shadow-glow-red hover:bg-medical-red-dark transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone className="text-medical-red w-8 h-8 mb-6 group-hover:scale-110 transition-transform duration-500" />,
                  title: "Call Us",
                  content: (
                    <>
                      <a href="tel:3184458380" className="text-sm text-gray-500 hover:text-medical-red transition-colors block mb-1">P: (318) 445-8380</a>
                      <a href="fax:3184459753" className="text-sm text-gray-500 hover:text-medical-red transition-colors block">F: (318) 445-9753</a>
                    </>
                  )
                },
                {
                  icon: <Mail className="text-medical-red w-8 h-8 mb-6 group-hover:scale-110 transition-transform duration-500" />,
                  title: "Email Us",
                  content: (
                    <a href="mailto:Griffin_family_medicine@yahoo.com" className="text-sm text-gray-500 hover:text-medical-red transition-colors block mb-1 break-all">Griffin_family_medicine@yahoo.com</a>
                  )
                },
                {
                  icon: <MapPin className="text-medical-red w-8 h-8 mb-6 group-hover:scale-110 transition-transform duration-500" />,
                  title: "Visit Us",
                  content: (
                    <a href="https://maps.google.com/?q=145+Yorktown+Dr,+Alexandria,+LA+71303" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-medical-red transition-colors block">
                      145 Yorktown Dr,<br />
                      Alexandria, LA 71303
                    </a>
                  )
                },
                {
                  icon: <Clock className="text-medical-red w-8 h-8 mb-6 group-hover:scale-110 transition-transform duration-500" />,
                  title: "Hours",
                  content: (
                    <>
                      <p className="text-sm text-gray-500">M-Th: 8am-12pm – 1pm-5pm</p>
                      <p className="text-sm text-gray-500">F: 8am – 2pm</p>
                    </>
                  )
                }
              ].map((card, i) => (
                <div key={i} className="premium-card p-8 group relative overflow-hidden">
                  {/* Top red accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {card.icon}
                  <h3 className="font-bold mb-2">{card.title}</h3>
                  {card.content}
                </div>
              ))}
            </div>

            <div className="bg-medical-slate rounded-[40px] overflow-hidden min-h-[400px] relative group shadow-premium hover:shadow-premium-hover transition-shadow duration-500 border border-white/5">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/80 via-medical-red to-rose-400 z-10" />
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1a1S9c9gDwFe3a_iXDQuyc-dNLW5e5Ho&ehbc=2E312F" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                title="Griffin Family Medicine Clinic Map"
                className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
