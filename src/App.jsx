import React from "react"; // useState ve useEffect'e artık gerek yok
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import GoalCarousel from "./components/GoalCarousel";
import "./App.css";
// Swiper CSS'lerini global olarak App.jsx veya main.jsx içinde tuttuğunuzdan emin olun
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function App() {
  // const [goal, setGoal] = useState(null); // Bu satırları kaldırıyoruz
  // useEffect(() => {
  //   const filteredGoals = sdgoals.filter(
  //     (g) => g.poster?.trim() !== "" && g.wallpaper?.trim() !== ""
  //   );
  //   const targetGoal = filteredGoals.find((g) => g.id === 3);
  //   setGoal(targetGoal || filteredGoals[0] || null);
  // }, []);
  // if (!goal) return <div>Hedef bulunamadı veya yükleniyor...</div>; // Bu satırları kaldırıyoruz

  return (
    <>
      <Header />
      {/* Her bileşene Header'daki linklerle eşleşen bir ID atıyoruz */}
      <section id="anasayfa">
        <Hero />
      </section>
      <section id="hakkimizda">
        <About />
      </section>
      <section id="hedefler">
        {" "}
        {/* Karusel bölümünü Hedefler ID'si ile işaretliyoruz */}
        <GoalCarousel />
      </section>
      {/* Footer'a iletişim için bir ID atıyoruz */}
      <section id="iletisim">
        <Footer />
      </section>
    </>
  );
}

export default App;
