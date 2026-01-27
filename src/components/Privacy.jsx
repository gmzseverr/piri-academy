import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4 drop-shadow-md uppercase tracking-tight">
            PİRİ EĞİTİM UYGULAMASI <br className="hidden md:block"/>
            WEB SİTESİ GİZLİLİK POLİTİKASI VE KVKK AYDINLATMA METNİ
          </h1>
          <p className="text-gray-600 font-semibold bg-orange-100 inline-block px-4 py-1 rounded-full text-sm">
            Son Güncelleme Tarihi: 27.01.2026
          </p>
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
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">1) Veri Sorumlusu</h2>
              <p>KVKK uyarınca kişisel verileriniz, aşağıda bilgileri bulunan veri sorumlusu tarafından işlenmektedir:</p>
              <div className="mt-3 bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p><strong>Veri Sorumlusu:</strong> Dilara GÜLNAZ</p>
                <p><strong>Adres:</strong> İstanbul, Kağıthane</p>
                <p><strong>E-posta:</strong> trpiritr@gmail.com</p>
              </div>
              <p className="mt-3 text-sm italic text-gray-600">Bu Site, şu an itibarıyla bir şirket tüzel kişiliği adına değil, bireysel veri sorumlusu tarafından yürütülmektedir. İleride şirketleşme olması halinde bu Metin güncellenerek yayınlanacaktır.</p>
            </section>

            {/* 2. Kapsam */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">2) Kapsam</h2>
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
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">3) İşlenen Kişisel Veriler</h2>
              <p>Site’nin kullanım şekline göre aşağıdaki kişisel veriler işlenebilir:</p>
              <div className="mt-4 space-y-4">
                <p><strong>A) Kimlik ve İletişim Verileri:</strong> Ad, soyad (iletişim esnasında iletilirse), E-posta adresi, Telefon numarası (iletilirse), Kurum/şirket adı ve unvan (iletilirse)</p>
                <p><strong>B) Talep / Mesaj / İşlem Verileri:</strong> İletişim mesajı içeriği (sorduğunuz soru, talep, öneri, şikâyet), İletişim sürecine ilişkin kayıtlar (tarih, yanıt durumu)</p>
                <p><strong>C) Teknik Veriler ve Log Kayıtları:</strong> IP adresi, cihaz bilgisi, tarayıcı türü, işletim sistemi, Ziyaret zamanı, görüntülenen sayfalar, yönlendiren sayfa (referrer), Güvenlik ve hata kayıtları (log)</p>
                <p><strong>D) Çerez ve Benzeri Teknolojilerden Elde Edilen Veriler:</strong> Oturum ve tercih bilgileri (Site’de kullanılıyorsa), Site performansı ve kullanım istatistikleri (analitik kullanılıyorsa)</p>
                <p className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-sm italic">
                  <strong>Önemli Not (Çocuk Verileri):</strong> Piri Eğitim Uygulaması çocuklara yönelik bir product olabilir. Bu Site üzerinden çocuklardan doğrudan kişisel veri toplanması amaçlanmamaktadır. Site üzerinden kayıt/başvuru gibi bir akış varsa ve çocuk verisi söz konusu oluyorsa, süreç veli/vasinin bilgilendirilmesi ve gerektiğinde onayı ile yürütülür ve minimum veri yaklaşımı uygulanır.
                </p>
              </div>
            </section>

            {/* 4. İşlenme Amaçları */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">4) Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
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
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Açık rıza (ör. bülten gönderimi, zorunlu olmayan analitik/ölçümleme çerezleri),</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (ör. bir hizmet/destek talebinizi yürütmek),</li>
                <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi,</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması,</li>
                <li>Meşru menfaat (Site güvenliği, temel işlevselliğin sağlanması; temel hak ve özgürlüklerinize zarar vermemek kaydıyla).</li>
              </ul>
              <p className="mt-2 text-sm italic text-gray-600">Özel nitelikli kişisel veriler (sağlık vb.) Site süreçlerinde kural olarak talep edilmez ve işlenmez. Bu tür bir veri tarafınızca mesaj içeriğinde paylaşılırsa, mümkün olan en sınırlı şekilde değerlendirilir.</p>
            </section>

            {/* 6. Toplanma Yöntemleri */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">6) Kişisel Verilerin Toplanma Yöntemleri</h2>
              <p>Kişisel verileriniz;</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Site üzerindeki iletişim kanalları (form varsa),</li>
                <li>Doğrudan e-posta iletişimi,</li>
                <li>Çerezler ve benzeri teknolojiler,</li>
                <li>Sunucu erişim ve güvenlik kayıtları (loglar)</li>
              </ul>
              <p className="mt-2">aracılığıyla otomatik veya kısmen otomatik yöntemlerle toplanabilir.</p>
            </section>

            {/* 7. Aktarılma */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">7) Kişisel Verilerin Aktarılması</h2>
              <p>Kişisel verileriniz, amaçlarla sınırlı ve gerekli olduğu ölçüde aşağıdaki alıcı gruplarına aktarılabilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Barındırma (hosting) / teknik altyapı sağlayıcıları (Site’nin çalışması için),</li>
                <li>E-posta hizmet sağlayıcıları (iletişimin yürütülmesi için),</li>
                <li>Analitik / hata izleme sağlayıcıları (kullanılıyorsa),</li>
                <li>Hukuken yetkili kamu kurum ve kuruluşları ile yargı mercileri (hukuki yükümlülükler kapsamında),</li>
                <li>Gerektiğinde danışmanlar (hukuk/bilgi güvenliği vb. – gizlilik yükümlülükleriyle).</li>
              </ul>
            </section>

            {/* 8. Yurt Dışı */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">8) Yurt Dışına Veri Aktarımı</h2>
              <p>Site altyapısı, e-posta hizmetleri veya kullanılan üçüncü taraf teknolojiler nedeniyle kişisel verileriniz yurt dışına aktarılabilir. Böyle bir durumda, ilgili mevzuat kapsamında gerekli bilgilendirme yapılır ve gerekiyorsa uygun hukuki mekanizmalar işletilir.</p>
            </section>

            {/* 9. Saklama Süreleri */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">9) Saklama Süreleri</h2>
              <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir.</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p><strong>Bu Site özelinde genel saklama yaklaşımı:</strong></p>
                <ul className="list-disc ml-6">
                  <li>İletişim talepleri ve yazışmalar: 1 yıl</li>
                  <li>Güvenlik ve hata logları: 6 ay – 12 ay</li>
                  <li>Bülten/duyuru aboneliği (varsa): abonelik sürdüğü müddetçe; iptal sonrası en fazla 3 ay</li>
                </ul>
                <p className="mt-2 text-xs">Mevzuatın daha uzun süre öngördüğü hallerde ilgili süreler uygulanabilir.</p>
              </div>
            </section>

            {/* 10. Çerezler */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">10) Çerez (Cookie) ve Benzeri Teknolojiler</h2>
              <p>Site’de aşağıdaki çerez türleri kullanılabilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li><strong>Zorunlu Çerezler:</strong> Site’nin güvenli şekilde çalışması ve temel fonksiyonların sağlanması için gereklidir.</li>
                <li><strong>Tercih/İşlevsellik Çerezleri (kullanılıyorsa):</strong> Dil/oturum gibi tercihleri hatırlamak için kullanılabilir.</li>
                <li><strong>Analitik/Performans Çerezleri (kullanılıyorsa):</strong> Site trafiğini ve kullanımını istatistiksel olarak ölçerek Site’yi geliştirmeye yardımcı olur. Bu tür çerezler, mümkün olduğunda açık rıza ile çalıştırılır.</li>
              </ul>
              <p className="mt-3">Çerez tercihlerinizi tarayıcı ayarlarınız üzerinden her zaman yönetebilir; çerezleri silebilir veya engelleyebilirsiniz. Çerezleri engellemeniz halinde Site’nin bazı işlevleri kısmen çalışmayabilir.</p>
            </section>

            {/* 11. Veri Güvenliği */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">11) Veri Güvenliği</h2>
              <p>Kişisel verilerinizin güvenliği için uygun teknik ve idari tedbirler uygulanır. Bunlara örnek olarak:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Yetkisiz erişimi önlemeye yönelik erişim kontrolleri,</li>
                <li>Güvenli iletişim (SSL/TLS),</li>
                <li>Log izleme ve güvenlik güncellemeleri,</li>
                <li>Hizmet alınan tedarikçilerle gizlilik ve güvenlik yükümlülükleri sayılabilir.</li>
              </ul>
            </section>

            {/* 12. Haklar */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">12) KVKK Kapsamında Haklarınız</h2>
              <p>KVKK uyarınca ilgili kişi olarak;</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>KVKK’daki şartlar çerçevesinde silinmesini/yok edilmesini isteme,</li>
                <li>Düzeltme/silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme,</li>
                <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme,</li>
                <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.</li>
              </ul>
            </section>

            {/* 13. Başvuru */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">13) Başvuru (İletişim) Yöntemi</h2>
              <p>KVKK kapsamındaki taleplerinizi <strong>trpiritr@gmail.com</strong> adresine e-posta göndererek iletebilirsiniz. Başvurularınız mevzuatta öngörülen sürelerde değerlendirilir. Gerekli durumlarda kimlik doğrulaması için ek bilgi/belge istenebilir.</p>
            </section>

            {/* 14. Üçüncü Taraf */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">14) Üçüncü Taraf Bağlantılar</h2>
              <p>Site’de üçüncü taraf web sitelerine yönlendiren bağlantılar bulunabilir. Bu sitelerin gizlilik uygulamalarından veri sorumlusu sorumlu değildir. Üçüncü taraf sitelerin kendi gizlilik politikalarını incelemeniz önerilir.</p>
            </section>

            {/* 15. Değişiklik */}
            <section>
              <h2 className="text-xl font-bold text-orange-600 mb-3 border-b border-orange-100 pb-2">15) Metinde Değişiklik</h2>
              <p>Bu Metin, mevzuat ve süreçlerdeki değişikliklere göre güncellenebilir. Güncellenen metin Site’de yayımlandığı tarihte yürürlüğe girer.</p>
            </section>

            {/* İletişim Alt Alan */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">İletişim</h2>
              <p className="text-lg font-bold text-orange-600">Dilara GÜLNAZ</p>
              <p>İstanbul, Kağıthane</p>
              <p className="font-medium">trpiritr@gmail.com</p>
            </section>

          </div>
        </motion.div>

        {/* Geri Dön Butonu */}
        <div className="text-center mt-12 mb-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1"
          >
            <span>←</span> Ana Sayfaya Geri Dön
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Privacy;