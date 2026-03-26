// Home page
import React from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  FlaskConical, 
  UserPlus, 
  Clock, 
  ChevronRight, 
  Download,
  Heart,
  Users,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import imgAllStaff from '../assets/all-staff.jpg';



interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---


const services: Service[] = [
  {
    title: "Preventive Care & Annual Exams",
    description: "Proactive wellness checks and screenings for all ages to keep you healthy and catch issues early.",
    icon: <ShieldCheck className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Chronic Disease Management",
    description: "Expert, long-term care for diabetes, hypertension, and other chronic conditions to help you live fully.",
    icon: <Activity className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Acute Illness Care",
    description: "Prompt diagnosis and treatment for colds, flu, infections, and other non-emergency illnesses.",
    icon: <Clock className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Women's Health Services",
    description: "Personalized women's health care including well-woman exams and screenings for every stage of life.",
    icon: <UserPlus className="w-8 h-8 text-medical-red" />
  },
  {
    title: "On-Site Laboratory Services",
    description: "Convenient, in-house blood work and diagnostics for faster results and more efficient care.",
    icon: <FlaskConical className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Holistic, Whole-Person Care",
    description: "A comprehensive approach to your health focused on long-term wellness of body, mind, and lifestyle.",
    icon: <Stethoscope className="w-8 h-8 text-medical-red" />
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-medical-gray">
      {/* Dynamic Background Elements */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-medical-red/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 xl:w-1/2 lg:pr-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-medical-red/20 shadow-premium rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-red"></span>
            </span>
            <span className="text-xs font-bold text-medical-slate uppercase tracking-widest">Accepting New Patients</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-[5rem] font-extrabold text-medical-slate leading-[1.05] mb-6 tracking-tight">
            Comprehensive Family Medicine
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-medical-red to-rose-400">with a Personal Touch.</span>
          </h1>

          <p className="text-base font-semibold text-medical-red/80 mb-5 tracking-wide">
            Same or next-day appointments &bull; On-site lab &bull; Convenient parking
          </p>
          
          <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-light">
            As a husband-and-wife team of board-certified physicians, we provide compassionate, personalized care for patients of all ages. We believe healthcare should feel personal, accessible, and centered around your whole well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-2xl font-bold shadow-glow-red transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-3 group">
              Book Appointment
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
            <a href="tel:3184458380" className="glass border border-gray-200 hover:border-medical-red/50 text-medical-slate px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 hover:-translate-y-1 shadow-premium">
              Call (318) 445-8380
            </a>
          </div>
        </motion.div>

        {/* Massive Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-7/12 xl:w-1/2 relative mt-8 lg:mt-0"
        >
          {/* Decorative accents */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-medical-red/20 rounded-[40px] -z-10" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-medical-slate rounded-[40px] -z-10" />
          
          <div className="relative rounded-[40px] overflow-hidden shadow-premium bg-white p-2">
            <img 
              src={imgAllStaff} 
              alt="Griffin Family Medicine Clinic Staff" 
              className="w-full h-[500px] lg:h-[700px] object-cover rounded-[32px] object-center"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Glass UI Element */}
            <div className="absolute bottom-10 left-10 md:bottom-12 md:left-12 glass px-6 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-medical-slate">20+ Years</p>
                <p className="text-xs text-medical-slate/70 font-medium">Serving Central Louisiana</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-white bg-crosshatch">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-red font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-medical-slate"
          >
            The Care You Deserve, Close to Home
          </motion.h2>
        </div>

        <div className="bento-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="premium-card group block w-full h-full p-8 relative overflow-hidden"
            >
              {/* Colorful hover backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-medical-red/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Link to="/expertise" className="block w-full h-full relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-medical-red to-rose-500 shadow-md group-hover:shadow-glow-red transition-all duration-500 group-hover:scale-110 [&>svg]:!text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-medical-slate group-hover:text-medical-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="font-bold text-medical-red text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Users />, title: "Physician-Led Practice", desc: "Independent, board-certified physicians" },
    { icon: <Calendar />, title: "Same or Next-Day", desc: "Appointments available quickly" },
    { icon: <Heart />, title: "We Treat You Like Family", desc: "Personal, relationship-based care" },
    { icon: <Clock />, title: "Convenient Parking", desc: "Stress-free, easy access" },
  ];

  return (
    <section className="bg-medical-red py-20 overflow-hidden relative">
      {/* Top and bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="absolute top-0 right-0 opacity-10">
        <Heart size={400} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10 group-hover:bg-white/30 transition-colors duration-500">
                {React.cloneElement(f.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-xl font-bold mb-2">{f.title}</h4>
              <p className="text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Resources = () => {
  return (
    <section id="paperwork" className="py-24 bg-medical-gray bg-dot-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[60px] overflow-hidden shadow-premium border-2 border-medical-red/30 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-red/5 rounded-full blur-3xl -z-10" />
            {/* Corner accent line */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-medical-red/10 rounded-tl-[56px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-medical-slate mb-8 leading-tight">
              Save Time on Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-red to-rose-400">First Visit.</span>
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed text-lg">
              We want your first visit to be as smooth as possible. Download and complete our new patient forms at home to expedite your check-in process.
            </p>
          </div>
          <div className="lg:w-1/2 bg-medical-slate p-12 md:p-20 flex flex-col justify-center items-center text-center relative border-l border-white/10 noise-overlay">
            <div className="relative z-10 glass-dark p-12 rounded-[40px] w-full max-w-sm mx-auto flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-medical-red to-medical-red-dark rounded-3xl flex items-center justify-center mb-8 shadow-glow-red">
                <Download className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">New Patient Paperwork</h3>
              <Link to="/forms-viewer" className="bg-white text-medical-slate hover:bg-medical-red hover:text-white px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 w-full shadow-premium hover:-translate-y-1 group">
                Download Packet
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />

      <Resources />
    </>
  );
};
