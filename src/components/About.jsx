import React from "react";

const About = () => {
  return (
    <section
      id="hakkimizda"
      className="w-full px-3 py-12 md:py-24 bg-amber-100"
    >
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-10 md:mb-16 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500 ease-in-out text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 md:mb-6 drop-shadow-md">
            {" "}
            Piri'nin Harika Dünyası
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Piri olarak, geleceğin süper kahramanları olan çocuklarımıza,
            dünyamızı daha iyi bir yer yapmanın sırlarını eğlenceli ve
            interaktif maceralarla öğretiyoruz. Öğrenmek hiç bu kadar keyifli
            olmamıştı!
          </p>
        </div>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-6 md:mb-8 drop-shadow-md">
            Piri'de Neler Var? Keşfet!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-orange-400">
            {" "}
            <div className="text-4xl sm:text-5xl text-orange-500 mb-3 sm:mb-4">
              🌟
            </div>{" "}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {" "}
              Bilgi Dolu Maceralar
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center">
              {" "}
              Sürdürülebilir Kalkınma Hedeflerine özel, heyecan verici hikayeler
              ve keşifler.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-green-400">
            <div className="text-4xl sm:text-5xl text-green-500 mb-3 sm:mb-4">
              🎮
            </div>{" "}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Eğlenceli Oyunlar
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center">
              Öğrenirken eğleneceğin interaktif oyunlar ve zeka geliştiren
              görevler.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-blue-400">
            <div className="text-4xl sm:text-5xl text-blue-500 mb-3 sm:mb-4">
              🎬
            </div>{" "}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Canlı Videolar
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center">
              Konuları daha iyi anlaman için renkli animasyonlar ve öğretici
              videolar.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-pink-400">
            <div className="text-4xl sm:text-5xl text-pink-500 mb-3 sm:mb-4">
              👨‍👩‍👧‍👦
            </div>{" "}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Ailece Keşfet
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center">
              Birlikte öğrenebileceğiniz ve eğlenebileceğiniz aile dostu
              aktiviteler.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-lime-400">
            <div className="text-4xl sm:text-5xl text-lime-600 mb-3 sm:mb-4">
              🌳
            </div>{" "}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Doğa Dostu Yaşam
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center">
              Çevreye ve topluma duyarlı, sürdürülebilir yaşam becerileri kazan.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center justify-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 border-purple-400">
            <div className="text-2xl sm:text-3xl font-semibold text-purple-600 text-center">
              {" "}
              Ve Çok Daha Fazlası!
            </div>
            <p className="text-sm sm:text-md text-gray-600 mt-2 text-center">
              {" "}
              Piri'nin gizemli dünyasını keşfetmek için bizi takip et!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
