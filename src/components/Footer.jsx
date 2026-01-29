import React from "react";
import { FaInstagram, FaEnvelope ,FaTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer id="iletişim" className="bg-gradient-to-r from-amber-300 to-lime-200 py-10 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-3xl font-extrabold text-white transform hover:scale-105 transition-transform duration-300">
            <h1 className="tracking-tight text-white drop-shadow-sm">Piri Academy</h1>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/piriacademy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-300 text-3xl transform hover:scale-125">
              <FaInstagram />
            </a>
            <a href="mailto:trpiritr@gmail.com" className="text-white hover:text-amber-500 transition-all duration-300 text-3xl transform hover:scale-125">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/90 text-sm font-medium">© 2025 Piri Academy. Tüm Hakları Saklıdır.</p>
          
          {/* gizlilik */}
          <Link
            to="/privacy" 
            className="text-white/90 hover:text-white text-sm font-semibold underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all"
          >
            Gizlilik Politikası
          </Link>
          {/* hesap silme*/}
            <Link
              to="/delete-account" 
              className="flex items-center gap-2 text-white/90 hover:text-red-500 text-sm font-semibold underline underline-offset-4 decoration-white/50 hover:decoration-red-500 transition-all"
            >
              <FaTrashAlt className="text-xs" /> Hesap Silme
            </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;