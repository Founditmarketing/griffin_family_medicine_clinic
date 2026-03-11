import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-medical-slate text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-medical-red rounded flex items-center justify-center">
                <Heart className="text-white w-5 h-5" fill="white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                GRIFFIN <span className="text-medical-red">FAMILY</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              Providing compassionate, comprehensive primary health care for families throughout Central Louisiana for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><Link to="/" className="hover:text-medical-red transition-colors">Home</Link></li>
              <li><Link to="/covid-19" className="hover:text-medical-red transition-colors">COVID-19 Info</Link></li>
              <li><Link to="/about" className="hover:text-medical-red transition-colors">About Us</Link></li>
              <li><Link to="/expertise" className="hover:text-medical-red transition-colors">Our Expertise</Link></li>
              <li><Link to="/paperwork" className="hover:text-medical-red transition-colors">Patient Paperwork</Link></li>
              <li><Link to="/reviews" className="hover:text-medical-red transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-medical-red shrink-0" />
                <a href="https://maps.google.com/?q=145+Yorktown+Dr,+Alexandria,+LA+71303" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">145 Yorktown Dr, <br />Alexandria, LA 71303</a>
              </li>
              <li className="flex gap-4">
                <Phone className="text-medical-red shrink-0" />
                <div className="text-white/50 flex flex-col gap-1">
                  <a href="tel:3184458380" className="hover:text-white transition-colors">P: (318) 445-8380</a>
                  <p>F: (318) 445-9753</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-medical-red shrink-0" />
                <a href="mailto:Griffin_family_medicine@yahoo.com" className="text-white/50 hover:text-white transition-colors break-all">Griffin_family_medicine@yahoo.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Our Location</h4>
            <div className="h-48 bg-white/5 rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/map/400/300" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.google.com/?q=145+Yorktown+Dr,+Alexandria,+LA+71303" target="_blank" rel="noopener noreferrer" className="bg-medical-red hover:bg-medical-red-dark text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transition-colors">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Griffin Family Medicine Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
