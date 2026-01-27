"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="w-full px-3 py-12 md:py-20 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Kartı */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 max-w-5xl mx-auto text-center border-b-8 border-orange-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4 drop-shadow-md uppercase">
            PİRİ EĞİTİM UYGULAMASI <br className="hidden md:block"/>
            WEB SİTESİ GİZLİLİK POLİTİKASI VE KVKK AYDINLATMA METNİ
          </h1>
          <p className="text-gray-600 font-semibold">Son Güncelleme Tarihi: 27.01.2026</p>
        </motion.div>

        {/* Politika İçeriği */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 md:p-12 max-w-5xl mx-auto text-gray-800 leading-relaxed text-sm md:text-base text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-8 font-medium">
            Bu Gizlilik Politikası ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metni (“Metin”), <strong>Piri Eğitim Uygulaması</strong> ile ilgili bilgilendirme yapılan web sitesini (“Site”) ziyaret eden, Site üzerinden iletişime geçen veya Site’de sunulan hizmetlerden yararlanan kişilerin kişisel verilerinin işlenmesine ilişkin esasları açıklar. Metin, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)</strong> ve ilgili mevzuata uygun olarak hazırlanmıştır.
          </p>

          <div className="space-y-10">
            {/* 1. Veri Sorumlusu */}
            <section>
              <h2 className="text-xl font-bold text-green-600 mb-3 border-b border-green-100 pb-2">1) Veri Sorumlusu</h2>
              <p>KVKK uyarınca kişisel verileriniz, aşağıda bilgileri bulunan veri sorumlusu tarafından işlenmektedir:</p>
              <div className="mt-3 bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                <p><strong>Veri Sorumlusu:</strong> Dilara GÜLNAZ</p>
                <p><strong>Adres:</strong> İstanbul, Kağıthane</p>
                <p><strong>E-posta:</strong> trpiritr@gmail.com</p>
              </div>
              <p className="mt-3 text-sm italic text-gray-600">Bu Site, şu an itibarıyla bir şirket tüzel kişiliği adına değil, bireysel veri sorumlusu tarafından yürütülmektedir. İleride şirketleşme olması halinde bu Metin güncellenerek yayınlanacaktır.</p>
            </section>

            {/* 2. Kapsam */}
            <section>
              <h2 className="text-xl font-bold text-blue-600 mb-3 border-b border-blue-100 pb-2">2) Kapsam</h2>
              <p>Bu Metin aşağıdaki kişileri kapsar:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Site ziyaretçileri,</li>
                <li>Site üzerinden iletişim formu/e-posta ile ulaşan kişiler,</li>
                <li>Site üzerinden bilgilendirme/bülten talep eden kişiler (varsa),</li>
                <li>İş birliği/kurumsal iletişim taleplerini ileten kişiler,</li>
                <li>Site’de kullanılan çerezler ve benzeri teknolojiler aracılığıyla verisi işlenen kişiler.</li>
              </ul>
            </section>

            {/* 3. İşlenen Kişisel Veriler */}
            <section>
              <h2 className="text-xl font-bold text-purple-600 mb-3 border-b border-purple-100 pb-2">3) İşlenen Kişisel Veriler</h2>
              <div className="space-y-4">
                <p><strong>A) Kimlik ve İletişim Verileri:</strong> Ad, soyad (iletişim esnasında iletilirse), E-posta adresi, Telefon numarası (iletilirse), Kurum/şirket adı ve unvan (iletilirse)</p>
                <p><strong>B) Talep / Mesaj / İşlem Verileri:</strong> İletişim mesajı içeriği (sorduğunuz soru, talep, öneri, şikâyet), İletişim sürecine ilişkin kayıtlar (tarih, yanıt durumu)</p>
                <p><strong>C) Teknik Veriler ve Log Kayıtları:</strong> IP adresi, cihaz bilgisi, tarayıcı türü, işletim sistemi, Ziyaret zamanı, görüntülenen sayfalar, yönlendiren sayfa (referrer), Güvenlik ve hata kayıtları (log)</p>
                <p><strong>D) Çerez ve Benzeri Teknolojilerden Elde Edilen Veriler:</strong> Oturum ve tercih bilgileri (Site’de kullanılıyorsa), Site performansı ve kullanım istatistikleri (analitik kullanılıyorsa)</p>
                <p className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <strong>Önemli Not (Çocuk Verileri):</strong> Piri Eğitim Uygulaması çocuklara yönelik bir ürün olabilir. Bu Site üzerinden çocuklardan doğrudan kişisel veri toplanması amaçlanmamaktadır. Site üzerinden kayıt/başvuru gibi bir akış varsa ve çocuk verisi söz konusu oluyorsa, süreç veli/vasinin bilgilendirilmesi ve gerektiğinde onayı ile yürütülür ve minimum veri yaklaşımı uygulanır.
                </p>
              </div>
            </section>

            {/* 4. İşlenme Amaçları */}
            <section>
              <h2 className="text-xl font-bold text-pink-600 mb-3 border-b border-pink-100 pb-2">4) Kişisel Verilerin İşlenme Amaçları</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Site üzerinden iletilen iletişim taleplerini yanıtlamak,</li>
                <li>Ürün/hizmet hakkında bilgilendirme yapmak (talep edilmesi halinde),</li>
                <li>Site’nin güvenliğini sağlamak, hata ve kötüye kullanım durumlarını tespit etmek,</li>
                <li>Site’nin performansını iyileştirmek ve kullanıcı deneyimini geliştirmek (analitik kullanılıyorsa),</li>
                <li>İlgili mevzuattan doğan hukuki yükümlülükleri yerine getirmek ve olası uyuşmazlıklarda hakları korumak.</li>
              </ul>
            </section>

            {/* 5. Hukuki Sebepler */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">5) Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h2>
              <p>Kişisel verileriniz KVKK kapsamında aşağıdaki hukuki sebeplerden birine veya birkaçına dayanarak işlenebilir:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Açık rıza,</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması,</li>
                <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi,</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması,</li>
                <li>Meşru menfaat.</li>
              </ul>
              <p className="mt-2 text-sm italic">Özel nitelikli kişisel veriler Site süreçlerinde kural olarak talep edilmez ve işlenmez.</p>
            </section>

            {/* Diğer Maddeler (Kısaltılarak Yapılandırılmış) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <section className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-2">6) Toplanma Yöntemleri</h3>
                  <p className="text-sm">Site içi formlar, e-posta iletişimi, çerezler ve sunucu logları üzerinden toplanır.</p>
               </section>
               <section className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-2">7) Veri Aktarımı</h3>
                  <p className="text-sm">Hosting, e-posta sağlayıcıları, analitik araçlar ve yasal merciler ile sınırlı olarak paylaşılabilir.</p>
               </section>
            </div>

            <section>
              <h2 className="text-xl font-bold text-indigo-600 mb-3 border-b border-indigo-100 pb-2">12) KVKK Kapsamında Haklarınız</h2>
              <p className="text-sm mb-4">KVKK uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme, yok etme ve aktarıldığı kişileri bilme gibi haklara sahipsiniz. Detaylı haklarınız KVKK 11. maddede düzenlenmiştir.</p>
            </section>

            <section className="bg-amber-100 p-6 rounded-2xl text-center border-2 border-dashed border-amber-400">
              <h2 className="text-xl font-bold text-amber-800 mb-2">13) Başvuru (İletişim) Yöntemi</h2>
              <p className="mb-4">Taleplerinizi aşağıdaki adrese e-posta göndererek iletebilirsiniz:</p>
              <a href="mailto:trpiritr@gmail.com" className="text-lg font-bold text-orange-600 underline">trpiritr@gmail.com</a>
            </section>

          </div>
        </motion.div>

        {/* Geri Dön Butonu */}
        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-1">
            <span>←</span> Ana Sayfaya Geri Dön
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;