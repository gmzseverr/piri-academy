import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import GoalCarousel from "./GoalCarousel";
import ComingSoon from "./ComingSoon";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      // URL state'ini temizlemek istersen
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <section id="anasayfa">
        <Hero />
        <ComingSoon />
      </section>
      <section id="hakkimizda">
        <About />
      </section>
      <section id="hedefler">
        <GoalCarousel />
      </section>
      <section id="iletisim">
        <Footer />
      </section>
    </>
  );
}
