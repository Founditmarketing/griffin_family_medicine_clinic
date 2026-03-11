/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './pages/Home.tsx';
import { CovidInfo } from './pages/CovidInfo.tsx';
import { About } from './pages/About.tsx';
import { Paperwork } from './pages/Paperwork.tsx';
import { Reviews } from './pages/Reviews.tsx';
import { Expertise } from './pages/Expertise.tsx';
import { Contact } from './pages/Contact.tsx';
import { DocumentViewer } from './pages/DocumentViewer.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="selection:bg-medical-red selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid-19" element={<CovidInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/paperwork" element={<Paperwork />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forms-viewer" element={<DocumentViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
