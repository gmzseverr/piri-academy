import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import GoalCard from "./GoalCard";
import SDGModal from "./SDGModal";
import { sdgoals } from "../data/goals";

// Swiper CSS'lerini global olarak App.jsx veya main.jsx içinde tutmak en iyisidir
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function GoalCarousel() {
  const [modalGoal, setModalGoal] = useState(null);
  const [filteredGoals, setFilteredGoals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const filtered = sdgoals.filter(
      (goal) => goal.poster?.trim() !== "" && goal.wallpaper?.trim() !== ""
    );
    setFilteredGoals(filtered);
    setIsLoaded(true);
  }, []);

  const handleGoalClickForModal = (goal) => {
    setModalGoal(goal);
  };

  const handleCloseModal = () => {
    setModalGoal(null);
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 to-orange-100 text-white text-xl">
        <p className="animate-pulse">Hedefler yükleniyor...</p>
      </div>
    );
  }

  if (filteredGoals.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 to-orange-100 text-white text-xl">
        <p>Hiç hedef bulunamadı.</p>
      </div>
    );
  }

  return (
    <section
      id="hedefler"
      className="relative px-3 w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-20"
      style={{
        backgroundImage: `url('public/assets/carousel_background.jpeg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-lime-200 z-0"></div>

      <div className="relative z-10 text-white text-center px-4 max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Sürdürülebilir Kalkınma Nedir?
        </h2>
        <p className="text-lg md:text-xl opacity-90 drop-shadow-md mb-8">
          Sürdürülebilir kalkınma, bugünkü ihtiyaçlarımızı, gelecekteki
          nesillerin ihtiyaçlarını tehlikeye atmadan karşılamak demektir. Yani
          dünyamızı koruyarak hem şimdi hem de sonsuza kadar herkesin iyi
          yaşamasını sağlamaktır!
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-amber-500 drop-shadow-lg leading-tight">
          Haydi, Piri ile Hedefleri Keşfet!
        </h3>
      </div>

      <div className="relative z-10 w-full max-w-4xl xl:max-w-6xl px-2 sm:px-4">
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          grabCursor={true}
          centeredSlides={true}
          speed={600}
          initialSlide={0}
          spaceBetween={10}
          loop={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
            1536: { slidesPerView: 6.2 },
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 60,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper !pb-8"
        >
          {filteredGoals.map((goal) => (
            <SwiperSlide
              key={goal.id}
              className={`flex justify-center items-center py-2 px-1 transition-all duration-300 ease-in-out group`}
            >
              <div
                onClick={() => handleGoalClickForModal(goal)}
                className="w-full h-full"
              >
                <GoalCard goal={goal} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SDGModal goal={modalGoal} onClose={handleCloseModal} />
    </section>
  );
}

export default GoalCarousel;
