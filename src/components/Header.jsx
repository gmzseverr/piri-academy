import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [headerBgClass, setHeaderBgClass] = useState("bg-transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setHeaderBgClass("bg-amber-400");
      return;
    }

    // Diğer sayfalarda scroll'a göre arkaplan değişsin
    const handleScroll = () => {
      const hakkimizdaSection = document.getElementById("hakkimizda");
      const hedeflerSection = document.getElementById("hedefler");
      const scrollY = window.scrollY;

      if (hedeflerSection && scrollY >= hedeflerSection.offsetTop - 100) {
        setHeaderBgClass("bg-lime-200");
      } else if (
        hakkimizdaSection &&
        scrollY >= hakkimizdaSection.offsetTop - 100
      ) {
        setHeaderBgClass("bg-amber-100");
      } else {
        setHeaderBgClass("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Ana sayfadaysak scroll yap, değilsek önce anasayfaya git sonra scroll yap
  const handleScrollOrNavigate = (id) => {
    closeMobileMenu();

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToId: id } });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 py-4 px-2 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="../assets/logo.png"
            alt="Piri Academy Logo"
            className="w-8 h-8"
          />
          <span className="text-white text-2xl font-extrabold drop-shadow-lg select-none">
            Piri Academy
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {["anasayfa", "hakkimizda", "hedefler", "iletisim"].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollOrNavigate(section)}
              className="text-white text-lg font-semibold hover:text-amber-500 transition-colors duration-300 drop-shadow-md cursor-pointer"
            >
              {section === "anasayfa"
                ? "Anasayfa"
                : section === "hakkimizda"
                ? "Hakkımızda"
                : section === "hedefler"
                ? "Hedefler"
                : "İletişim"}
            </button>
          ))}

          <Link
            to="/blog"
            className="text-white text-lg font-semibold hover:text-amber-500 transition-colors duration-300 drop-shadow-md cursor-pointer"
          >
            Blog
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-amber-400 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {["anasayfa", "hakkimizda", "hedefler", "iletisim"].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScrollOrNavigate(section)}
                className="text-white text-lg font-semibold hover:text-amber-500 py-2 block cursor-pointer"
              >
                {section === "anasayfa"
                  ? "Anasayfa"
                  : section === "hakkimizda"
                  ? "Hakkımızda"
                  : section === "hedefler"
                  ? "Hedefler"
                  : "İletişim"}
              </button>
            </li>
          ))}

          <li>
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="text-white text-lg font-semibold hover:text-amber-500 py-2 block cursor-pointer"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
