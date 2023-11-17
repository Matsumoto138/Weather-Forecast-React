# Weather Forecast bir ReactJS uygulamasıdır.
Uygulama 6 farklı component kullanılarak oluşturulmuştur. Kullanılan component isimleri sırasıyla
  1- Weather.js (Component 0)
  2- SidebarMenu.js (Component 1)
  3- Activities.js (Component 2)
  4- WeeklyForecast.js (Component 3)
  5- AirConditions.js (Component 4)
  6- HourlyForecast.js (Component 5)

# Dosya Yapısı
Projenin komponentleri /src/Components klasöründe bulunur.
Projede kullanılan görseller /src/Images klasöründe bulunur.
Projenin stil dosyaları /src/Style klasöründe bulunur.

# Data dosyası ve fetch işlemleri
Projedeki veriler /public/data/ReactProjectData.json dosyasında barındırılır.
Projede veri çekme işlemi sadece App.js dosyasında yapılmış, alınan veriler diğer komponentlere prop yoluyla geçilmiştir.

# Paketler
Projede 
  "react-chartjs-2": "^5.2.0",
  "react-charts": "^3.0.0-beta.57",
paketleri kullanılmıştır.
