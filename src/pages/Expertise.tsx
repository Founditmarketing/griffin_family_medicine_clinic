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
    description: "Our comprehensive physical examinations form the cornerstone of your proactive health maintenance. We don't just check boxes; we conduct thorough evaluations designed to catch potential health issues before they become serious problems. By taking the time to understand your lifestyle, family medical history, and personal concerns, we tailor each exam to your unique needs.",
    details: [
      "Extensive medical history review",
      "Full head-to-toe physical assessment",
      "Vital sign monitoring and analysis",
      "Age-specific screenings"
    ],
    icon: <Stethoscope className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Preventative Healthcare",
    description: "True health means preventing illness before it begins. Our preventative healthcare programs focus on nutrition, lifestyle modifications, and proactive clinical screenings to maintain your vitality over the long term. We work with you to develop individualized wellness plans that fit your daily routine.",
    details: [
      "Customized wellness planning",
      "Dietary and nutritional counseling",
      "Weight management programs",
      "Cardiovascular risk assessments"
    ],
    icon: <ShieldCheck className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Adult Immunizations",
    description: "Staying up-to-date with immunizations is critical for adults at any age. We maintain a comprehensive stock of essential vaccines to protect you and your loved ones from preventable diseases. Our team strictly follows the latest CDC guidelines to ensure you receive the right vaccines at the right time.",
    details: [
      "Annual influenza (flu) shots",
      "Pneumonia and shingles vaccines",
      "Tetanus, Diphtheria, and Pertussis (Tdap)",
      "Travel-specific vaccinations"
    ],
    icon: <Activity className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Laboratory Testing",
    description: "Accurate diagnoses rely on precise laboratory results. We offer convenient, on-site diagnostics for a variety of critical tests, minimizing the time you have to wait for answers and enabling us to develop an effective treatment plan faster than relying solely on off-site labs.",
    details: [
      "Comprehensive metabolic panels",
      "Lipid and cholesterol screening",
      "Complete blood counts (CBC)",
      "A1C and diabetes monitoring"
    ],
    icon: <FlaskConical className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Specialist Referrals",
    description: "When your health requires highly specialized care, we act as the quarterback for your medical team. We maintain strong relationships with Cenla's top specialists and manage the referral process smoothly. We ensure your medical records are seamlessly transferred and will continue to coordinate your care long after.",
    details: [
      "Direct connections to top regional specialists",
      "Seamless transfer of medical records",
      "Post-specialist care coordination",
      "Guidance navigating complex diagnoses"
    ],
    icon: <UserPlus className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Urgent Care",
    description: "Illnesses and minor injuries do not adhere to a convenient schedule. For non-life-threatening medical issues, bypass the long, expensive emergency room visits and receive prompt, professional care directly from the clinic staff who already know you and your medical history.",
    details: [
      "Treatment for minor burns and lacerations",
      "Sprains, strains, and minor fractures",
      "Unexpected fevers, colds, and flu symptoms",
      "Allergic reactions and skin rashes"
    ],
    icon: <Clock className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Chronic Disease Management",
    description: "Living with a chronic condition requires constant vigilance, but it shouldn't hold you back from living a full life. We provide expert, long-term management strategies for complex diseases. We closely monitor your condition through regular check-ups, continuous education, and tailored medication management.",
    details: [
      "Diabetes management and education",
      "Hypertension and heart disease oversight",
      "Asthma and COPD treatment plans",
      "Thyroid disorder regulation"
    ],
    icon: <HeartPulse className="w-8 h-8 text-medical-red" />
  },
  {
    title: "Pediatric Care",
    description: "From infants to adolescents, we provide gentle, compassionate medical care for your children. We understand the unique needs of younger patients and focus on setting them up for a lifetime of excellent health with comprehensive wellness checks, growth tracking, and sick child evaluations.",
    details: [
      "Newborn and infant well checks",
      "Childhood vaccination schedules",
      "School and sports physicals",
      "Adolescent mental and physical health"
    ],
    icon: <Baby className="w-8 h-8 text-medical-red" />
  }
];

export const Expertise = () => {
  return (
    <div className="pt-24 min-h-screen bg-medical-gray flex flex-col relative z-0">
      {/* Sharp Diagonal Background Pattern for the whole page */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,#0f1214_40px,#0f1214_60px,transparent_60px,transparent_80px,#0f1214_80px,#0f1214_90px)]" />

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
