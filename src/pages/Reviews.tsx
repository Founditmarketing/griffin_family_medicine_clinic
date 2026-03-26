import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Raquel Riche",
      rating: 5,
      text: "Dr Griffin's office staff is very professional. My NP Jaimie Perrotti has been instrumental in trying to diagnose an issue w/ my bloodwork, and I greatly appreciate her ethics and professionalism!"
    },
    {
      name: "Brittany Cupp",
      rating: 5,
      text: "I love going here and seeing Dr. Amy. She is very helpful and very fast. I wouldn't choose another doctor to see. Very nice staff and very helpful. Never having to wait long."
    },
    {
      name: "Clint Whitcher",
      rating: 5,
      text: "Very good staff. Making an appointment is easy. My grandpa is also one of their patients and he is thoroughly impressed by them."
    },
    {
      name: "Hamilton",
      rating: 5,
      text: "All I can say is I love her. She listens and takes the appropriate amount of time with her patients. She never rushes and she listens and cares about her patients. I'm not just a number to her."
    },
    {
      name: "Martha Harper",
      rating: 5,
      text: "I have been going to her for about 10 years. She has always taken time to listen to me and is ready to help me with my medical needs. I have trust in her. If she can't help she refers me to a doctor who can help."
    },
    {
      name: "Shana S.",
      rating: 5,
      text: "Great doctors and staff who really listen and work with you for the best health outcome."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-medical-gray bg-dot-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header section with dark background band */}
        <div className="bg-medical-slate rounded-[48px] p-12 md:p-16 text-center mb-16 relative overflow-hidden noise-overlay shadow-premium border-double-red">
          {/* Background dot pattern */}
          <div className="absolute inset-0 bg-dot-grid-white opacity-100 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Patient <span className="text-medical-red">Reviews</span>
            </motion.h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" className="w-6 h-6" />)}
              </div>
              <span className="text-2xl font-bold text-white">5.0/5</span>
            </div>
            <p className="text-white/50">Based on verified Google patient reviews.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Top red accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-red/60 via-medical-red to-rose-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Quote className="absolute top-8 right-8 text-medical-red/10 w-12 h-12 group-hover:text-medical-red/25 transition-colors" />
              <div className="flex text-yellow-500 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-medical-red/10 to-rose-100 rounded-full flex items-center justify-center border border-medical-red/10">
                  <User className="text-medical-red/60 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-slate">{review.name}</h4>
                  <p className="text-xs text-yellow-500 font-bold tracking-widest flex gap-0.5">
                    ★★★★★
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-[60px] p-12 md:p-20 text-center border border-gray-100 shadow-premium relative overflow-hidden border-double-red"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-medical-red/10 rounded-tl-[56px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-medical-red/10 rounded-br-[56px] pointer-events-none" />

          <h2 className="text-3xl font-bold text-medical-slate mb-6">Share Your Experience</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Your feedback helps us improve our services and helps other patients find the care they need.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Griffin+Family+Medicine+Clinic+Alexandria+LA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-medical-red text-white px-10 py-5 rounded-2xl font-bold shadow-glow-red hover:bg-medical-red-dark transition-all hover:-translate-y-1 duration-500"
          >
            Write a Review on Google
          </a>
        </motion.div>
      </div>
    </div>
  );
};
