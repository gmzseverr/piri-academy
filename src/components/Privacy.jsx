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
          <p className="text-gray-600 font-semibold text-sm">
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
          <p className="mb-6">
            Bu Gizlilik Politikası ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metni (“Metin”), <strong>Piri Eğitim Uygulaması</strong> ile ilgili bilgilendirme yapılan web sitesini (“Site”) ziyaret eden, Site üzerinden iletişime geçen veya Site’de sunulan hizmetlerden yararlanan kişilerin kişisel verilerinin işlenmesine ilişkin esasları açıklar. Metin, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)</strong> ve ilgili mevzuata uygun olarak hazırlanmıştır.
          </p>

          <div className="space-y-8">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1) Veri Sorumlusu</h2>
              <p>KVKK uyarınca kişisel verileriniz, aşağıda bilgileri bulunan veri sorumlusu tarafından işlenmektedir:</p>
              <p className="mt-2">
                <strong>Veri Sorumlusu:</strong> Dilara GÜLNAZ <strong>Adres:</strong> İstanbul, Kağıthane <strong>E-posta:</strong> trpiritr@gmail.com
              </p>
              <p className="mt-2 italic">
                Bu Site, şu an itibarıyla bir şirket tüzel kişiliği adına değil, <strong>bireysel veri sorumlusu</strong> tarafından yürütülmektedir. İleride şirketleşme olması halinde bu Metin güncellenerek yayınlanacaktır.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2) Kapsam</h2>
              <p>Bu Metin aşağıdaki kişileri kapsar:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Site ziyaretçileri,</li>
                <li>Site üzerinden <strong>iletişim formu/e-posta</strong> ile ulaşan kişiler,</li>
                <li>Site üzerinden <strong>bilgilendirme/bülten</strong> talep eden kişiler (varsa),</li>
                <li>İş birliği/kurumsal iletişim taleplerini ileten kişiler,</li>
                <li>Site’de kullanılan <strong>çerezler ve benzeri teknolojiler</strong> aracılığıyla verisi işlenen kişiler.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3) İşlenen Kişisel Veriler</h2>
              <p>Site’nin kullanım şekline göre aşağıdaki kişisel veriler işlenebilir:</p>
              <div className="mt-3 space-y-3">
                <p><strong>A) Kimlik ve İletişim Verileri</strong></p>
                <p>Ad, soyad (iletişim esnasında iletilirse) E-posta adresi Telefon numarası (iletilirse) Kurum/şirket adı ve unvan (iletilirse)</p>
                
                <p><strong>B) Talep / Mesaj / İşlem Verileri</strong></p>
                <p>İletişim mesajı içeriği (sorduğunuz soru, talep, öneri, şikâyet) İletişim sürecine ilişkin kayıtlar (tarih, yanıt durumu)</p>
                
                <p><strong>C) Teknik Veriler ve Log Kayıtları</strong></p>
                <p>IP adresi, cihaz bilgisi, tarayıcı türü, işletim sistemi Ziyaret zamanı, görüntülenen sayfalar, yönlendiren sayfa (referrer) Güvenlik ve hata kayıtları (log)</p>
                
                <p><strong>D) Çerez ve Benzeri Teknolojilerden Elde Edilen Veriler</strong></p>
                <p>Oturum ve tercih bilgileri (Site’de kullanılıyorsa) Site performansı ve kullanım istatistikleri (analitik kullanılıyorsa)</p>
                
                <p className="pt-2">
                  <strong>Önemli Not (Çocuk Verileri):</strong> Piri Eğitim Uygulaması çocuklara yönelik bir ürün olabilir. Bu Site üzerinden <strong>çocuklardan doğrudan kişisel veri toplanması amaçlanmamaktadır.</strong> Site üzerinden kayıt/başvuru gibi bir akış varsa ve çocuk verisi söz konusu oluyorsa, süreç <strong>veli/vasinin bilgilendirilmesi ve gerektiğinde onayı</strong> ile yürütülür ve <strong>minimum veri</strong> yaklaşımı uygulanır.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4) Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Site üzerinden iletilen <strong>iletişim taleplerini</strong> yanıtlamak,</li>
                <li>Ürün/hizmet hakkında <strong>bilgilendirme</strong> yapmak (talep edilmesi halinde),</li>
                <li>Site’nin <strong>güvenliğini sağlamak</strong>, hata ve kötüye kullanım durumlarını tespit etmek,</li>
                <li>Site’nin performansını iyileştirmek ve kullanıcı deneyimini geliştirmek (analitik kullanılıyorsa),</li>
                <li>İlgili mevzuattan doğan <strong>hukuki yükümlülükleri</strong> yerine getirmek ve olası uyuşmazlıklarda hakları korumak.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">5) Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h2>
              <p>Kişisel verileriniz KVKK kapsamında aşağıdaki hukuki sebeplerden birine veya birkaçına dayanarak işlenebilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Açık rıza</strong> (ör. bülten gönderimi, zorunlu olmayan analitik/ölçümleme çerezleri),</li>
                <li><strong>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</strong> (ör. bir hizmet/destek talebinizi yürütmek),</li>
                <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi,</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması,</li>
                <li><strong>Meşru menfaat</strong> (Site güvenliği, temel işlevselliğin sağlanması; temel hak ve özgürlüklerinize zarar vermemek kaydıyla).</li>
              </ul>
              <p className="mt-2 italic text-gray-600"><strong>Özel nitelikli kişisel veriler</strong> (sağlık vb.) Site süreçlerinde kural olarak talep edilmez ve işlenmez. Bu tür bir veri tarafınızca mesaj içeriğinde paylaşılırsa, mümkün olan en sınırlı şekilde değerlendirilir.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">6) Kişisel Verilerin Toplanma Yöntemleri</h2>
              <p>Kişisel verileriniz;</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Site üzerindeki iletişim kanalları (form varsa),</li>
                <li>Doğrudan e-posta iletişimi,</li>
                <li>Çerezler ve benzeri teknolojiler,</li>
                <li>Sunucu erişim ve güvenlik kayıtları (loglar)</li>
              </ul>
              <p className="mt-2 text-gray-700 font-medium">aracılığıyla otomatik veya kısmen otomatik yöntemlerle toplanabilir.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">7) Kişisel Verilerin Aktarılması</h2>
              <p>Kişisel verileriniz, amaçlarla sınırlı ve gerekli olduğu ölçüde aşağıdaki alıcı gruplarına aktarılabilir:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Barındırma (hosting) / teknik altyapı sağlayıcıları</strong> (Site’nin çalışması için),</li>
                <li><strong>E-posta hizmet sağlayıcıları</strong> (iletişimin yürütülmesi için),</li>
                <li><strong>Analitik / hata izleme sağlayıcıları</strong> (kullanılıyorsa),</li>
                <li><strong>Hukuken yetkili kamu kurum ve kuruluşları</strong> ile <strong>yargı mercileri</strong> (hukuki yükümlülükler kapsamında),</li>
                <li>Gerektiğinde <strong>danışmanlar</strong> (hukuk/bilgi güvenliği vb. – gizlilik yükümlülükleriyle).</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">8) Yurt Dışına Veri Aktarımı</h2>
              <p>Site altyapısı, e-posta hizmetleri veya kullanılan üçüncü taraf teknolojiler nedeniyle kişisel verileriniz <strong>yurt dışına aktarılabilir.</strong> Böyle bir durumda, ilgili mevzuat kapsamında gerekli bilgilendirme yapılır ve gerekiyorsa uygun hukuki mekanizmalar işletilir.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">9) Saklama Süreleri</h2>
              <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır; süre sonunda <strong>silinir, yok edilir veya anonim hale getirilir.</strong></p>
              <p className="mt-2 font-medium">Bu Site özelinde genel saklama yaklaşımı:</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><strong>İletişim talepleri ve yazışmalar:</strong> 1 yıl</li>
                <li><strong>Güvenlik ve hata logları:</strong> 6 ay – 12 ay</li>
                <li><strong>Bülten/duyuru aboneliği (varsa):</strong> abonelik sürdüğü müddetçe; iptal sonrası en fazla 3 ay</li>
              </ul>
              <p className="mt-2 text-sm italic">Mevzuatın daha uzun süre öngördüğü hallerde ilgili süreler uygulanabilir.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">10) Çerez (Cookie) ve Benzeri Teknolojiler</h2>
              <p>Site’de aşağıdaki çerez türleri kullanılabilir:</p>
              <p className="mt-2"><strong>Zorunlu Çerezler</strong></p>
              <p>Site’nin güvenli şekilde çalışması ve temel fonksiyonların sağlanması için gereklidir.</p>
              <p className="mt-2"><strong>Tercih/İşlevsellik Çerezleri (kullanılıyorsa)</strong></p>
              <p>Dil/oturum gibi tercihleri hatırlamak için kullanılabilir.</p>
              <p className="mt-2"><strong>Analitik/Performans Çerezleri (kullanılıyorsa)</strong></p>
              <p>Site trafiğini ve kullanımını istatistiksel olarak ölçerek Site’yi geliştirmeye yardımcı olur. Bu tür çerezler, mümkün olduğunda <strong>açık rıza</strong> ile çalıştırılır.</p>
              <p className="mt-3">Çerez tercihlerinizi tarayıcı ayarlarınız üzerinden her zaman yönetebilir; çerezleri silebilir veya engelleyebilirsiniz. Çerezleri engellemeniz halinde Site’nin bazı işlevleri kısmen çalışmayabilir.</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">11) Veri Güvenliği</h2>
              <p>Kişisel verilerinizin güvenliği için uygun teknik ve idari tedbirler uygulanır. Bunlara örnek olarak:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Yetkisiz erişimi önlemeye yönelik erişim kontrolleri,</li>
                <li>Güvenli iletişim (SSL/TLS),</li>
                <li>Log izleme ve güvenlik güncellemeleri,</li>
                <li>Hizmet alınan tedarikçilerle gizlilik ve güvenlik yükümlülükleri sayılabilir.</li>
              </ul>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">12) KVKK Kapsamında Haklarınız</h2>
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

            {/* 13 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">13) Başvuru (İletişim) Yöntemi</h2>
              <p>KVKK kapsamındaki taleplerinizi <strong>trpiritr@gmail.com</strong> adresine e-posta göndererek iletebilirsiniz. Başvurularınız mevzuatta öngörülen sürelerde değerlendirilir. Gerekli durumlarda kimlik doğrulaması için ek bilgi/belge istenebilir.</p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">14) Üçüncü Taraf Bağlantılar</h2>
              <p>Site’de üçüncü taraf web sitelerine yönlendiren bağlantılar bulunabilir. Bu sitelerin gizlilik uygulamalarından veri sorumlusu sorumlu değildir. Üçüncü taraf sitelerin kendi gizlilik politikalarını incelemeniz önerilir.</p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">15) Metinde Değişiklik</h2>
              <p>Bu Metin, mevzuat ve süreçlerdeki değişikliklere göre güncellenebilir. Güncellenen metin Site’de yayımlandığı tarihte yürürlüğe girer.</p>
            </section>

            {/* İletişim */}
            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-1">İletişim</h2>
              <p><strong>Dilara GÜLNAZ</strong> İstanbul, Kağıthane <strong>trpiritr@gmail.com</strong></p>
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