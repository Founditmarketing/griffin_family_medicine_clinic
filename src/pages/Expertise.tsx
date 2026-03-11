import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, ShieldCheck, Activity, FlaskConical, UserPlus, Clock, 
  ArrowRight, HeartPulse, Baby
} from 'lucide-react';
import { Link } from 'react-router-dom';

const expertiseItems = [
  {
    title: "Routine Physical Examinations",
    description: "Comprehensive wellness checks for all ages to monitor health and catch issues early. We take the time to understand your complete health profile.",
    icon: <Stethoscope className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Preventative Healthcare",
    description: "Proactive strategies and screenings to maintain your long-term health and vitality. Focus on nutrition, lifestyle, and early detection.",
    icon: <ShieldCheck className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Adult Immunizations",
    description: "Stay protected with up-to-date vaccinations for flu, pneumonia, shingles, and other preventable conditions.",
    icon: <Activity className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Laboratory Testing",
    description: "Convenient on-site blood work and diagnostic tests for fast, accurate results so we can develop your treatment plan quickly.",
    icon: <FlaskConical className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Specialist Referrals",
    description: "Coordinated care with the region's top specialists when you need advanced treatment. We act as your healthcare quarterback.",
    icon: <UserPlus className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Urgent Care",
    description: "Prompt medical attention for non-life-threatening illnesses and minor injuries. Skip the ER wait for things like sprains or minor infections.",
    icon: <Clock className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Chronic Disease Management",
    description: "Expert ongoing care for conditions like diabetes, hypertension, and asthma to ensure you maintain the highest quality of life.",
    icon: <HeartPulse className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Pediatric Care",
    description: "Gentle and compassionate care for your children, from newborn stages through adolescence.",
    icon: <Baby className="w-8 h-8 text-medical-red" />
  }
];

export const Expertise = () => {
  return (
    <div className="pt-24 min-h-screen bg-medical-gray flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden flex-grow-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-red/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-medical-red font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Comprehensive Care
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-medical-slate mb-6">
              Our <span className="text-medical-red">Expertise</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              We provide a wide range of medical services tailored to you and your family's needs. From routine check-ups to managing complex health conditions, our experienced team is here for you.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-medical-slate border-2 border-medical-slate hover:bg-medical-slate hover:text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 px-6 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-medical-gray p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-medical-red/20"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-medical-slate group-hover:text-medical-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action connecting back to home */}
      <section className="py-20 px-6 bg-medical-slate text-center flex-grow-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to prioritize your health?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            Our team is ready to provide the expert care you deserve. Return to our home page to learn more about our practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              Return to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
