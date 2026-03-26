import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DocumentViewer = () => {
  return (
    <div className="pt-24 pb-0 bg-medical-gray flex flex-col h-screen overflow-hidden">
      
      {/* Top action bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            to="/paperwork" 
            className="p-3 text-medical-slate bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-center"
            title="Go Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-medical-slate flex items-center gap-2">
              <FileText className="w-5 h-5 text-medical-red" />
              New Patient Forms Packet
            </h1>
            <p className="text-sm text-gray-500">Read and review before downloading</p>
          </div>
        </div>
        
        <div className="flex shrink-0">
          <a
            href="/Griffin_Forms.pdf"
            download="Griffin_Forms.pdf"
            className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md shadow-medical-red/20 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow w-full bg-gray-100 relative shadow-inner overflow-hidden"
      >
        <object 
          data="/Griffin_Forms.pdf#toolbar=0&navpanes=0&scrollbar=1" 
          type="application/pdf" 
          className="absolute inset-0 w-full h-full border-none"
        >
          {/* Fallback for browsers that don't support PDF embedding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-medical-slate text-white p-12 text-center">
            <FileText className="w-24 h-24 text-medical-red mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Your browser does not support inline PDFs.</h2>
            <p className="text-white/70 mb-8 max-w-md">
              Please download the PDF to view the patient paperwork forms directly on your device.
            </p>
            <a
              href="/Griffin_Forms.pdf"
              download="Griffin_Forms.pdf"
              className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download PDF Packet
            </a>
          </div>
        </object>
      </motion.div>
      
    </div>
  );
};
