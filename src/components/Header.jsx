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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Menü öğeleri, istediğin sıralama ile. blog scroll değil, path var.
  const menuItems = [
    { id: "anasayfa", label: "Anasayfa", scroll: true },
    { id: "blog", label: "Blog", scroll: false, path: "/blog" },
    { id: "hakkimizda", label: "Hakkımızda", scroll: true },
    { id: "hedefler", label: "Hedefler", scroll: true },
    { id: "iletisim", label: "İletişim", scroll: true },
  ];

  const handleClick = (item) => {
    closeMobileMenu();

    if (item.scroll) {
      if (location.pathname === "/") {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollToId: item.id } });
      }
    } else if (item.path) {
      navigate(item.path);
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
          {menuItems.map((item) =>
            item.scroll ? (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="text-white text-lg font-semibold hover:text-amber-500 transition-colors duration-300 drop-shadow-md cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className="text-white text-lg font-semibold hover:text-amber-500 transition-colors duration-300 drop-shadow-md cursor-pointer"
              >
                {item.label}
              </Link>
            )
          )}
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
          {menuItems.map((item) =>
            item.scroll ? (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item)}
                  className="text-white text-lg font-semibold hover:text-amber-500 py-2 block cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="text-white text-lg font-semibold hover:text-amber-500 py-2 block cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
