import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-medical-slate mb-6"
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
            className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-medical-slate mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-medical-gray border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-red transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-medical-gray border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-red transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Phone Number</label>
                <input type="tel" placeholder="(318) 000-0000" className="w-full bg-medical-gray border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-red transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Subject</label>
                <select className="w-full bg-medical-gray border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-red transition-all outline-none appearance-none">
                  <option>Appointment Inquiry</option>
                  <option>General Question</option>
                  <option>Billing Question</option>
                  <option>Medical Records</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-slate uppercase tracking-wider">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-medical-gray border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-red transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-medical-red text-white py-5 rounded-2xl font-bold shadow-xl shadow-medical-red/20 hover:bg-medical-red-dark transition-all flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-medical-gray p-8 rounded-[40px] border border-gray-100">
                <Phone className="text-medical-red w-8 h-8 mb-6" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <a href="tel:3184458380" className="text-sm text-gray-500 hover:text-medical-red transition-colors block mb-1">P: (318) 445-8380</a>
                <p className="text-sm text-gray-500">F: (318) 445-9753</p>
              </div>
              <div className="bg-medical-gray p-8 rounded-[40px] border border-gray-100">
                <Mail className="text-medical-red w-8 h-8 mb-6" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <a href="mailto:Griffin_family_medicine@yahoo.com" className="text-sm text-gray-500 hover:text-medical-red transition-colors block mb-1 break-all">Griffin_family_medicine@yahoo.com</a>
                <a href="mailto:billing@griffinfamily.com" className="text-sm text-gray-500 hover:text-medical-red transition-colors block">billing@griffinfamily.com</a>
              </div>
              <div className="bg-medical-gray p-8 rounded-[40px] border border-gray-100">
                <MapPin className="text-medical-red w-8 h-8 mb-6" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <a href="https://maps.google.com/?q=145+Yorktown+Dr,+Alexandria,+LA+71303" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-medical-red transition-colors block">
                  145 Yorktown Dr,<br />
                  Alexandria, LA 71303
                </a>
              </div>
              <div className="bg-medical-gray p-8 rounded-[40px] border border-gray-100">
                <Clock className="text-medical-red w-8 h-8 mb-6" />
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-sm text-gray-500">Mon - Fri: 8am - 5pm</p>
                <p className="text-sm text-gray-500">Sat - Sun: Closed</p>
              </div>
            </div>

            <div className="bg-medical-slate rounded-[40px] overflow-hidden min-h-[500px] relative group shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1a1S9c9gDwFe3a_iXDQuyc-dNLW5e5Ho&ehbc=2E312F" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                title="Griffin Family Medicine Clinic Map"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
