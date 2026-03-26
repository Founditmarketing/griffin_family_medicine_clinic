import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Stethoscope, ShieldCheck, Activity, FlaskConical, UserPlus, Clock, 
  ArrowRight, HeartPulse, Baby
} from 'lucide-react';
import { Link } from 'react-router-dom';

const expertiseItems = [
  {
    title: "Preventive Care & Annual Exams",
    description: "Our proactive wellness exams and screenings form the cornerstone of your long-term health. We don't just check boxes; we conduct thorough evaluations designed to catch potential health issues before they become serious. By understanding your lifestyle, family history, and personal concerns, we tailor each visit to your unique needs.",
    details: [
      "Comprehensive medical history review",
      "Full head-to-toe physical assessment",
      "Vital sign monitoring and analysis",
      "Age-specific screenings and wellness planning"
    ],
    icon: <ShieldCheck className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Chronic Disease Management",
    description: "Living with a chronic condition requires constant vigilance, but it shouldn't hold you back from living a full life. We provide expert, long-term management strategies for complex diseases including diabetes and hypertension. We closely monitor your condition through regular check-ups, education, and tailored medication management.",
    details: [
      "Diabetes management and education",
      "Hypertension and heart disease oversight",
      "Asthma and COPD treatment plans",
      "Thyroid disorder regulation"
    ],
    icon: <HeartPulse className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Acute Illness Care",
    description: "Illnesses do not adhere to a convenient schedule. For non-life-threatening conditions like colds, flu, and infections, bypass the long, expensive emergency room wait and receive prompt, professional care directly from the clinic staff who already know you and your medical history.",
    details: [
      "Unexpected fevers, colds, and flu symptoms",
      "Sinus and ear infections",
      "Allergic reactions and skin rashes",
      "Sprains, strains, and minor injuries"
    ],
    icon: <Clock className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Women's Health Services",
    description: "Dr. Amy Griffin has a special interest in women's health, offering personalized care for every stage of life. From annual well-woman exams to condition-specific screenings, we provide compassionate, comprehensive support for women's unique health needs.",
    details: [
      "Well-woman exams and screenings",
      "Reproductive and hormonal health",
      "Preventive screenings (mammogram, Pap smear)",
      "Menopause management and support"
    ],
    icon: <Baby className="w-8 h-8 text-medical-red" />
  },
  {
    title: "On-Site Laboratory Services",
    description: "Accurate diagnoses rely on precise laboratory results. We offer convenient, in-house diagnostics for a variety of critical tests, minimizing the time you wait for answers and enabling us to develop an effective treatment plan faster.",
    details: [
      "Comprehensive metabolic panels",
      "Lipid and cholesterol screening",
      "Complete blood counts (CBC)",
      "A1C and diabetes monitoring"
    ],
    icon: <FlaskConical className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Holistic, Whole-Person Care",
    description: "True health is not just the absence of disease, but a state of complete physical, mental, and social well-being. We focus on long-term wellness through preventive strategies, lifestyle modifications, and a comprehensive understanding of each patient as a whole person.",
    details: [
      "Customized wellness planning",
      "Dietary and nutritional counseling",
      "Weight management guidance",
      "Lifestyle and cardiovascular risk assessments"
    ],
    icon: <Stethoscope className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Specialist Referrals",
    description: "When your health requires highly specialized care, we act as the quarterback for your medical team. We maintain strong relationships with Cenla's top specialists and manage the referral process smoothly, ensuring your records are transferred and your care is coordinated.",
    details: [
      "Direct connections to top regional specialists",
      "Seamless transfer of medical records",
      "Post-specialist care coordination",
      "Guidance navigating complex diagnoses"
    ],
    icon: <UserPlus className="w-8 h-8 text-medical-red" />
  }
];

export const Expertise = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]); // Moves up as you scroll down
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]); // Moves up slower

  return (
    <div className="pt-24 min-h-screen bg-medical-gray flex flex-col relative z-0 overflow-hidden">
      {/* Precision Diagonal Parallax Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center">
        <motion.div 
          style={{ y: y1 }}
          className="absolute w-[200%] h-[20px] bg-medical-red/10 rotate-[-45deg] top-[20%]"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute w-[200%] h-[10px] bg-medical-red/20 rotate-[-45deg] top-[30%]"
        />
      </div>

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
              We provide a wide range of medical services tailored to you and your family's needs. From preventive care and chronic disease management to women's health and on-site laboratory services, our experienced team is here for you.
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

      {/* Expertise List */}
      <section className="py-20 px-6 relative flex-grow z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="premium-card p-8 md:p-12 hover:shadow-premium-hover transition-all duration-500 flex flex-col lg:flex-row gap-10 items-start group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-medical-red/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-medical-red to-rose-500 rounded-[28px] shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow-red transition-all duration-500 [&>svg]:!text-white [&>svg]:w-10 [&>svg]:h-10">
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medical-slate group-hover:text-medical-red transition-colors">
                  {item.title}
                </h2>
                <div className="h-1 w-20 bg-medical-red/20 mb-8 rounded-full group-hover:w-40 transition-all duration-500" />
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
                
                <div className="mt-8 border-t border-medical-slate/10 pt-8">
                  <h4 className="font-bold text-medical-slate mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-medical-red rounded-full" />
                    Key Areas of Focus:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-medical-red flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
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
              className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-full font-bold shadow-glow-red transition-all duration-500 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
