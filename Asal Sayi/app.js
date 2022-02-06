
      function artiHesap() {
        Arti();
        Hesapla();
      }

      function eksiHesap() {
        Eksi();
        Hesapla();
      }

      function Arti() {
        document.getElementById("sayiGir").value =
          Number(document.getElementById("sayiGir").value) + 1;
      }

      function Eksi() {
        document.getElementById("sayiGir").value =
          Number(document.getElementById("sayiGir").value) - 1;
      }

      function Temizle() {
        document.getElementById("sayiGir").value = "";

        document.getElementById("sonuc").innerHTML = "";
      }

      function Hesapla() {
        let text = "";
        let sayac = 0;
        let sayi = Number(document.getElementById("sayiGir").value);

        let kume = [];

        if (sayi == 0 || sayi == 1 || sayi == "" || sayi < 0) {
          text = "<strong>Sayı girmeyi dene fakat negatif sayi, 0 ve 1 olmasın !!!</strong>";
        } else {
          for (i = 2; i < sayi; i++) {
            if (sayi % i == 0) {
              sayac++;
              kume.push(i);
            }
          }
          if (sayac == 0) {
            text =
              "Girdiğin <strong>" +
              sayi +
              "</strong> Sayısı <strong>Asal :)</strong>";
          } else {
            text =
              "Girdiğin <strong>" +
              sayi +
              "</strong> Sayısı <strong>Asal değil!</strong><br/> 1 ve Kendisi hariç <strong>" +
              sayac +
              "</strong> adet böleni var <br/> Bölenler: " +
              kume;
          }
        }

        document.getElementById("sonuc").innerHTML = text;
      }

      let hesapBtn = document.getElementById("hsp");
      hesapBtn.onclick = Hesapla;

      let clearBtn = document.getElementById("clr");
      clearBtn.onclick = Temizle;

      let artiBtn = document.getElementById("arti");
      artiBtn.onclick = artiHesap;

      let eksiBtn = document.getElementById("eksi");
      eksiBtn.onclick = eksiHesap;