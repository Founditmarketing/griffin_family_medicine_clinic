import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, Users, History, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all staff images
import imgChrisGriffin from '../assets/staff/Christopher Griffin, M.D.png';
import imgAmyGriffin from '../assets/staff/Amy Griffin, M.D.png';
import imgJamiePerrotti from '../assets/staff/Jamie Perrotti, PA-C.png';
import imgWesleyColeman from '../assets/staff/Wesley L. Coleman, MPAS, PA-C.png';
import imgAnnaParten from '../assets/staff/Anna Parten, PA-C.png';
import imgMeganPaul from '../assets/staff/Megan Paul, NP.png';

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

        {/* Providers Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-4">Our Medical Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-slate">Meet Our Providers</h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            
            {/* Christopher Griffin */}
            <div className="flex flex-col lg:flex-row gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img src={imgChrisGriffin} alt="Christopher Griffin, M.D." className="w-full h-auto rounded-[32px] object-cover shadow-lg" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-3xl font-bold text-medical-slate mb-2">Christopher Griffin, M.D.</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-6">Family Physician</p>
                <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                  <p>Chris Griffin, MD is a board-certified Family Medicine Physician. Dr. Griffin is from Central Louisiana having grown up in the Bunkie area. He has a Bachelor of Science degree from LSU in Baton Rouge and completed his medical residency training through LSUHSC-Shreveport.</p>
                  <p>He is married to Dr. Amy Griffin who is also a board-certified Family Physician. They have two children Olivia and Luke.</p>
                  <p>Dr. Griffin enjoys all things outdoors and loves to travel.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Amy Griffin */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img src={imgAmyGriffin} alt="Amy Griffin, M.D." className="w-full h-auto rounded-[32px] object-cover shadow-lg" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-3xl font-bold text-medical-slate mb-2">Amy Griffin, M.D.</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-6">Family Physician</p>
                <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                  <p>Amy Griffin, MD is a board-certified Family Medicine Physician. She is originally from Baton Rouge and is a graduate of LSU. She has been practicing in this community for the past 16 years having completed her residency training here in Alexandria through LSUHSC Shreveport.</p>
                  <p>She is the proud mother to Olivia and Luke Griffin. Dr. Amy is an active member of Our Lady Prompt Succor Parish. She enjoys any activity with her children and living a healthy active life.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Jamie Perrotti */}
            <div className="flex flex-col lg:flex-row gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img src={imgJamiePerrotti} alt="Jamie Perrotti, PA-C" className="w-full h-auto rounded-[32px] object-cover shadow-lg" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-3xl font-bold text-medical-slate mb-2">Jamie Perrotti, PA-C</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-6">Certified Physician Assistant</p>
                <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                  <p>Jamie is a certified physician assistant who graduated from LSUHSC-S in 2008 and has been with Griffin Family Medicine since that time. She loves working in family medicine where she is able to establish long term relationships with people.</p>
                  <p>Jamie is married to her high school sweetheart Joel and they have 2 daughters, Kate and Jane. They lead a very healthy, active lifestyle and try to be a positive example for her patients.</p>
                  <p>She loves deer and turkey hunting and chasing after her very busy daughters.</p>
                  <p>Jamie, Joel, and the girls are active members of Our Lady of Prompt Succor Church and School.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Wesley L. Coleman */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img src={imgWesleyColeman} alt="Wesley L. Coleman, MPAS, PA-C" className="w-full h-auto rounded-[32px] object-cover shadow-lg" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-3xl font-bold text-medical-slate mb-2">Wesley L. Coleman, MPAS, PA-C</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-6">Certified Physician Assistant</p>
                <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2 mb-8">
                  <li>LSU Health Graduate</li>
                  <li>Undergraduate studies at ULM</li>
                  <li>Originally from Northeast La</li>
                  <li>Enjoys the outdoors</li>
                  <li>The oldest of 8 siblings</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Anna Parten & Megan Paul row */}
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Anna Parten */}
              <div className="flex flex-col items-center bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center">
                <img src={imgAnnaParten} alt="Anna Parten, PA-C" className="w-48 h-48 rounded-full object-cover shadow-lg mb-6" />
                <h3 className="text-2xl font-bold text-medical-slate mb-2">Anna Parten, PA-C</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-8">Certified Physician Assistant</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 mt-auto">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Megan Paul */}
              <div className="flex flex-col items-center bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center">
                <img src={imgMeganPaul} alt="Megan Paul, NP" className="w-48 h-48 rounded-full object-cover shadow-lg mb-6" />
                <h3 className="text-2xl font-bold text-medical-slate mb-2">Megan Paul, NP</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-8">Nurse Practitioner</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 mt-auto">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
