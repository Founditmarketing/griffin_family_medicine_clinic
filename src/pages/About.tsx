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
    <div className="pt-32 pb-24 bg-medical-gray bg-dot-grid min-h-screen">
      {/* Page-level decorative corner accents */}
      <div className="fixed top-32 left-6 w-16 h-16 border-l-2 border-t-2 border-medical-red/15 rounded-tl-2xl pointer-events-none z-0" />
      <div className="fixed bottom-16 right-6 w-16 h-16 border-r-2 border-b-2 border-medical-red/15 rounded-br-2xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-4 not-prose">Our Legacy</p>
            <h1 className="text-4xl md:text-6xl font-bold text-medical-slate mb-12 leading-tight not-prose">
              A Tradition of Excellence in <span className="text-medical-red">Family Medicine.</span>
            </h1>

            <div className="float-none md:float-right md:w-5/12 ml-0 md:ml-12 mb-8 md:mb-4 relative">
              <img 
                src="https://picsum.photos/seed/about/800/600" 
                alt="Our Clinic" 
                className="w-full rounded-[40px] shadow-2xl not-prose"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-medical-red p-6 lg:p-8 rounded-[32px] text-white shadow-xl hidden sm:block">
                <p className="text-3xl lg:text-4xl font-bold mb-1">20+</p>
                <p className="text-xs lg:text-sm font-semibold opacity-80 uppercase tracking-wider">Years of Service</p>
              </div>
            </div>

            <p className="leading-relaxed mb-6">
              Griffin Family Medicine Clinic was founded with a simple mission: to provide high-quality, compassionate healthcare to the families of Central Louisiana. For over two decades, we have been a proud cornerstone of the Cenla community, serving generations of families through every stage of life. Our commitment has always been, and always will be, rooted in a deep understanding of the people we care for.
            </p>
            <p className="leading-relaxed mb-6">
              Our practice combines the warmth of a traditional family-owned clinic with the cutting-edge technology of modern diagnostic medicine. We believe that true health is not just the absence of disease, but a state of complete physical, mental, and social well-being. That means prioritizing both rapid intervention when you are sick, and long-term preventative care when you are well.
            </p>
            <p className="leading-relaxed">
              Every day, our dedicated team of physicians, physician assistants, and nurse practitioners brings decades of combined experience into the exam room. Whether you're visiting for an annual physical, managing a chronic condition, or dropping in for an acute illness, we take the time to listen and tailor our approach to your unique needs. At Griffin Family Medicine, you aren't just a patient chart—you are family.
            </p>
            
            <div className="clear-both"></div>
          </motion.div>
        </div>

        <div className="double-line-divider mb-24 opacity-50" />

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
              whileHover={{ y: -10 }}
              className="premium-card p-10 group relative overflow-hidden"
            >
              {/* Red accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mb-6 p-4 bg-medical-gray rounded-2xl w-fit group-hover:bg-medical-red/10 transition-colors duration-500 text-medical-red shadow-sm">
                {value.icon}
              </div>
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
          className="bg-medical-slate rounded-[60px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-premium noise-overlay"
        >
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-medical-red/20 rounded-full blur-[100px] pointer-events-none" />
          {/* Decorative background icon */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <History size={400} className="absolute -top-20 -left-20" />
          </div>
          {/* Red accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-medical-red/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-medical-red/60 to-transparent" />

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </motion.div>

            {/* Amy Griffin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </motion.div>

            {/* Jamie Perrotti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </motion.div>

            {/* Wesley L. Coleman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </motion.div>

            {/* Anna Parten & Megan Paul row */}
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Anna Parten */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={imgAnnaParten} alt="Anna Parten, PA-C" className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 ring-4 ring-medical-gray group-hover:ring-medical-red/20 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-medical-slate mb-2">Anna Parten, PA-C</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-8">Certified Physician Assistant</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 mt-auto">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Megan Paul */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={imgMeganPaul} alt="Megan Paul, NP" className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 ring-4 ring-medical-gray group-hover:ring-medical-red/20 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-medical-slate mb-2">Megan Paul, NP</h3>
                <p className="text-medical-red font-bold uppercase tracking-widest text-sm mb-8">Nurse Practitioner</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 mt-auto">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
