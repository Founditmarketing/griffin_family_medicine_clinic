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

// --- Types ---
interface Provider {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const providers: Provider[] = [
  {
    name: "Christopher Griffin, M.D.",
    title: "Family Physician",
    image: "https://picsum.photos/seed/doc1/400/500",
    bio: "Specializing in comprehensive family care with over 20 years of experience in the Cenla area."
  },
  {
    name: "Amy Griffin, M.D.",
    title: "Family Physician",
    image: "https://picsum.photos/seed/doc2/400/500",
    bio: "Dedicated to preventative medicine and women's health initiatives within our community."
  },
  {
    name: "Jamie Perrotti, PA-C",
    title: "Certified Physician Assistant",
    image: "https://picsum.photos/seed/pa1/400/500",
    bio: "Expert in acute care and patient education, ensuring every family member receives personalized attention."
  },
  {
    name: "Wesley L. Coleman, MPAS, PA-C",
    title: "Certified Physician Assistant",
    image: "https://picsum.photos/seed/pa2/400/500",
    bio: "Focuses on chronic disease management and geriatric care with a compassionate approach."
  },
  {
    name: "Anna Parten, PA-C",
    title: "Certified Physician Assistant",
    image: "https://picsum.photos/seed/pa3/400/500",
    bio: "Passionate about pediatric care and adolescent health, bringing a fresh perspective to family medicine."
  }
];

const services: Service[] = [
  {
    title: "Routine Physical Examinations",
    description: "Comprehensive wellness checks for all ages to monitor health and catch issues early.",
    icon: <Stethoscope className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Preventative Healthcare",
    description: "Proactive strategies and screenings to maintain your long-term health and vitality.",
    icon: <ShieldCheck className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Adult Immunizations",
    description: "Stay protected with up-to-date vaccinations for flu, pneumonia, and more.",
    icon: <Activity className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Laboratory Testing",
    description: "On-site blood work and diagnostic tests for fast, accurate results.",
    icon: <FlaskConical className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Specialist Referrals",
    description: "Coordinated care with the region's top specialists when you need advanced treatment.",
    icon: <UserPlus className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Urgent Care",
    description: "Prompt medical attention for non-life-threatening illnesses and minor injuries.",
    icon: <Clock className="w-8 h-8 text-medical-red" />
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-gray -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-red/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-red/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-medical-red rounded-full animate-pulse" />
            <span className="text-xs font-bold text-medical-red uppercase tracking-wider">Accepting New Patients</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-medical-slate leading-[1.1] mb-6">
            Providing Quality <br />
            <span className="text-medical-red">Primary Health Care</span> <br />
            for People in Cenla.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Expert, compassionate medical attention for you and your family. In-person and Telehealth appointments available to fit your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-medical-red/30 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2">
              Book Same-Day Appointment
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-medical-red text-medical-red hover:bg-medical-red hover:text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              Access 24/7 Live Chat
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/clinic/800/1000" 
              alt="Griffin Family Medicine Clinic" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-medical-gray">
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
            Comprehensive Care When You Need It
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
              className="bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <Link to="/expertise" className="block w-full h-full p-8">
                <div className="mb-6 p-4 bg-medical-gray rounded-2xl w-fit group-hover:bg-medical-red/10 transition-colors">
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
    { icon: <Clock />, title: "24/7 On Call", desc: "Always here for emergencies" },
    { icon: <Users />, title: "Experienced Doctors", desc: "Board-certified professionals" },
    { icon: <Heart />, title: "Friendly Staff", desc: "Compassionate patient care" },
    { icon: <Calendar />, title: "Same Day Appointments", desc: "Quick access to medical care" },
  ];

  return (
    <section className="bg-medical-red py-20 overflow-hidden relative">
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
              className="text-center text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
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

const Providers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-medical-red font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Medical Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-slate">Meet Our Providers</h2>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x">
          {providers.map((provider, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-start group"
            >
              <div className="relative h-[500px] rounded-[40px] overflow-hidden mb-6">
                <img 
                  src={provider.image} 
                  alt={provider.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-slate/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-medical-red font-bold text-xs uppercase tracking-widest mb-2">{provider.title}</p>
                  <h3 className="text-2xl font-bold">{provider.name}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {provider.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  return (
    <section id="paperwork" className="py-24 bg-medical-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20">
            <h2 className="text-4xl md:text-5xl font-bold text-medical-slate mb-8">
              Save Time on Your <br />
              <span className="text-medical-red">First Visit.</span>
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed text-lg">
              We want your first visit to be as smooth as possible. Download and complete our new patient forms at home to expedite your check-in process.
            </p>
          </div>
          <div className="lg:w-1/2 bg-medical-slate p-12 md:p-20 flex flex-col justify-center items-center text-center relative">
            <div className="relative z-10">
              <div className="w-24 h-24 bg-medical-red rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-medical-red/40">
                <Download className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">New Patient Paperwork</h3>
              <button className="bg-white text-medical-slate hover:bg-medical-red hover:text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center gap-3 mx-auto shadow-xl">
                Download PDF Packet
                <ChevronRight className="w-5 h-5" />
              </button>
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
      <Providers />
      <Resources />
    </>
  );
};
