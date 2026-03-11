import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah J.",
      rating: 5,
      text: "Dr. Griffin and his staff are wonderful. They take the time to listen and truly care about their patients. I've been coming here for 10 years and wouldn't go anywhere else.",
      date: "2 weeks ago"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "The wait times are always short, and the facility is spotless. Jamie Perrotti is fantastic—very thorough and knowledgeable.",
      date: "1 month ago"
    },
    {
      name: "Emily W.",
      rating: 5,
      text: "I love the telehealth option! It's so convenient for follow-ups. The staff is always friendly and professional.",
      date: "3 months ago"
    },
    {
      name: "David L.",
      rating: 4,
      text: "Great experience every time. The new patient process was very easy thanks to the online forms.",
      date: "4 months ago"
    },
    {
      name: "Jessica M.",
      rating: 5,
      text: "Best family clinic in Alexandria. They treat you like a person, not just a number. Highly recommend Dr. Amy Griffin.",
      date: "6 months ago"
    },
    {
      name: "Robert K.",
      rating: 5,
      text: "Professional, clean, and caring. What more can you ask for in a family doctor?",
      date: "8 months ago"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-medical-slate mb-6"
          >
            Patient <span className="text-medical-red">Reviews</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" className="w-6 h-6" />)}
            </div>
            <span className="text-2xl font-bold text-medical-slate">4.9/5</span>
          </div>
          <p className="text-gray-500">Based on over 500 verified patient reviews.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-8 right-8 text-medical-red/10 w-12 h-12 group-hover:text-medical-red/20 transition-colors" />
              <div className="flex text-yellow-500 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-gray rounded-full flex items-center justify-center">
                  <User className="text-gray-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-slate">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-medical-gray rounded-[60px] p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl font-bold text-medical-slate mb-6">Share Your Experience</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Your feedback helps us improve our services and helps other patients find the care they need.
          </p>
          <button className="bg-medical-red text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-medical-red/20 hover:bg-medical-red-dark transition-all">
            Write a Review
          </button>
        </motion.div>
      </div>
    </div>
  );
};
