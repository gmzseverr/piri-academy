import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEnvelopeOpenText, FaUserShield, FaExclamationTriangle } from "react-icons/fa";

const DeleteAccount = () => {
  // Sayfa açıldığında en üst noktadan başlamasını sağlar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full min-h-screen bg-red-40">
      {/* Header Boşluğu */}
      <div className="w-full h-24 md:h-32"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Başlık Kartı */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 max-w-5xl mx-auto text-center border-b-8 border-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-red-600 mb-4 uppercase tracking-tight">
            PİRİ EĞİTİM UYGULAMASI <br className="hidden md:block"/>
            HESAP SİLME VE VERİ SİLME TALEBİ
          </h1>
          <p className="text-gray-600 font-semibold text-sm">
            Son Güncelleme Tarihi: 27.01.2026
          </p>
        </motion.div>

        {/* Giriş Metni */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto mb-10 text-gray-800 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-base md:text-lg">
            Piri Eğitim Uygulaması’nda bir hesabınız varsa, hesabınızı ve/veya hesabınıza bağlı kişisel verilerin silinmesini talep edebilirsiniz. Bu sayfa, hesap silme süreci ve veri silme taleplerine ilişkin bilgilendirme amacıyla hazırlanmıştır.
          </p>
        </motion.div>

        {/* İki Yöntem Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Uygulama İçi */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-4 text-orange-600">
              <FaTrashAlt size={24} />
              <h2 className="text-xl font-bold text-gray-900">Uygulama İçinden Silme</h2>
            </div>
            <ul className="text-sm text-gray-700 space-y-3">
              <li>• Uygulamayı açın</li>
              <li>• Profil / Ayarlar menüsüne gidin</li>
              <li>• Hesap bölümünü açın</li>
              <li>• <strong>Hesabı Sil</strong> seçeneğini seçin</li>
              <li>• Ekrandaki adımları tamamlayın</li>
            </ul>
          </motion.div>

          {/* E-posta Yöntemi */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-500"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-4 text-blue-600">
              <FaEnvelopeOpenText size={24} />
              <h2 className="text-xl font-bold text-gray-900">E-posta ile Talep</h2>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Uygulamada hesap silme özelliği bulunmuyor veya hesabınıza erişemiyorsanız:
            </p>
            <div className="bg-blue-50 p-3 rounded-lg text-xs font-mono text-blue-800">
              Alıcı: trpiritr@gmail.com <br/>
              Konu: Hesap Silme Talebi
            </div>
          </motion.div>
        </div>

        {/* Detaylı Metin Alanı */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 md:p-12 max-w-5xl mx-auto text-gray-800 leading-relaxed text-sm md:text-base text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-8">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2 border-l-4 border-red-500 pl-3">1) Veri Sorumlusu ve İletişim</h2>
              <p><strong>Veri Sorumlusu:</strong> Dilara GÜLNAZ | <strong>Adres:</strong> İstanbul, Kağıthane | <strong>E-posta:</strong> trpiritr@gmail.com</p>
            </section>

            {/* 2 - E-posta Detayları */}
            <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">E-postanızda Bulunması Gereken Bilgiler</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Hesabın bağlı olduğu e-posta adresi veya telefon</li>
                <li>Varsa kullanıcı adı / rumuz</li>
                <li>Talebin kapsamı: “Hesabımın silinmesini istiyorum.”</li>
                <li><strong>Hesap bir çocuk profiline bağlıysa:</strong> veli/vasinin adı-soyadı ve talebin veli tarafından yapıldığı bilgisi</li>
              </ul>
              <p className="mt-4 text-xs italic text-red-500 font-medium flex items-center gap-2">
                <FaExclamationTriangle /> Kimlik doğrulama amacıyla ek bilgi talep edilebilir.
              </p>
            </section>

            {/* 3 & 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                   <FaUserShield className="text-green-600"/> Hesap Silinince Ne Olur?
                </h2>
                <p className="text-sm">Hesabınıza erişim kapatılır. Verileriniz mevzuatın izin verdiği ölçüde silinir veya anonim hale getirilir. <strong>Puan, rozet ve ilerleme bilgileri geri döndürülemez şekilde kaybolabilir.</strong></p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Hangi Veriler Silinir?</h2>
                <p className="text-sm italic">Hesap bilgileri, profil detayları, uygulama içi puanlar ve yüklediğiniz içerikler hedeflenen verilerdir. Teknik loglar ve yasal zorunluluğu olan kayıtlar ise sadece yasal süreleri boyunca saklanır.</p>
              </section>
            </div>

            {/* 6 */}
            <section className="bg-orange-50 p-6 rounded-xl border-l-8 border-orange-400">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Çocuk Hesapları / Veli Talepleri</h2>
              <p>Piri Eğitim Uygulaması çocuklara yönelik olabileceğinden, talebin veli/vasiden geldiğinin doğrulanması istenebilir. Çocuğun güvenliği ve gizliliği korunarak süreç yürütülür.</p>
            </section>

            {/* Final İletişim */}
            <section className="pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 mb-2">Tüm sorularınız ve talepleriniz için:</p>
              <a href="mailto:trpiritr@gmail.com" className="text-xl font-bold text-orange-600 hover:underline">
                trpiritr@gmail.com
              </a>
            </section>
          </div>
        </motion.div>

        {/* Geri Dön Butonu */}
        <div className="text-center mt-12 mb-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-white text-gray-600 font-bold py-4 px-10 rounded-full hover:bg-orange-50 transition-all shadow-xl"
          >
            <span>←</span> Ana Sayfaya Geri Dön
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccount;