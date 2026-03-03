# 🌦️ Modern Hava Durumu Uygulaması

Bu proje, kullanıcılara dünya genelindeki şehirlerin hava durumu bilgilerini anlık olarak sunan, görsel olarak zengin ve modern bir web uygulamasıdır.

##  Özellikler
* **Glassmorphism Kullanıcı Arayüzü:** Modern ve şeffaf tasarım öğeleri.
* **Dinamik Arka Plan:** Hava durumuna veya uygulama akışına göre değişen hareketli gradyanlar.
* **Güvenli API Yönetimi:** API anahtarları `.gitignore` ile korunmaktadır.
* **Kullanıcı Deneyimi (UX):** Enter tuşu desteği ve hata mesajları ile akıcı kullanım.
* **Hızlı ve Hafif:** Saf JavaScript (Vanilla JS) ile yüksek performans.

##  Kullanılan Teknolojiler
* **HTML5 & CSS3:** Semantik yapı ve gelişmiş animasyonlar.
* **JavaScript (ES6+):** Fetch API ile asenkron veri yönetimi.
* **OpenWeather API:** Gerçek zamanlı hava durumu verileri.
* **Google Fonts (Poppins):** Modern tipografi.

##  Başlangıç
Projeyi yerel bilgisayarınızda çalıştırmak için:

1. Bu depoyu klonlayın: `git clone https://github.com/merve-gunes/weather-app.git`
2. Ana dizinde bir `config.js` dosyası oluşturun.
3. İçine OpenWeather API anahtarınızı ekleyin:
   ```javascript
   const config = {
       API_KEY: "SİZİN_API_ANAHTARINIZ"
   };
