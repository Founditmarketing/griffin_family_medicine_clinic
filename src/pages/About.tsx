import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, Users, History } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</p>
            <h1 className="text-4xl md:text-6xl font-bold text-medical-slate mb-8 leading-tight">
              A Tradition of Excellence in <span className="text-medical-red">Family Medicine.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Griffin Family Medicine Clinic was founded with a simple mission: to provide high-quality, compassionate healthcare to the families of Central Louisiana. For over 20 years, we have been a cornerstone of the Cenla community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our practice combines the warmth of a family-owned clinic with the cutting-edge technology of modern medicine. We believe that health is not just the absence of disease, but a state of complete physical, mental, and social well-being.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Our Clinic" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-medical-red p-8 rounded-[32px] text-white shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">Years of Service</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              icon: <Heart className="w-8 h-8" />, 
              title: "Patient-Centered", 
              desc: "Your health and comfort are our top priorities. We listen, care, and treat you like family." 
            },
            { 
              icon: <Award className="w-8 h-8" />, 
              title: "Excellence", 
              desc: "We maintain the highest standards of medical practice through continuous learning and innovation." 
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              title: "Community", 
              desc: "We are proud to serve Cenla and actively participate in local health initiatives." 
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-medical-gray p-10 rounded-[32px] border border-gray-100"
            >
              <div className="mb-6 text-medical-red">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-medical-slate rounded-[60px] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <History size={400} className="absolute -top-20 -left-20" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic">
              "To provide accessible, high-quality primary care that empowers our patients to lead healthier, more fulfilling lives through prevention, education, and compassionate treatment."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
