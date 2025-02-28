var renkKodu = document.querySelector(".renkKodu");
var tekrardene = document.querySelector(".tekrardene");
var baslikbar = document.querySelector("#baslikbar");
var baslik = document.querySelector(".baslik");
var kutuContainer = document.querySelector("#kutu-container");

document.querySelector("#easy").addEventListener("click", function() {
    seviyeyiAyarla("easy");
    kutulariOlustur(3); 
    tekrardene.textContent = "";
});

document.querySelector("#hard").addEventListener("click", function() {
    seviyeyiAyarla("hard");
    kutulariOlustur(6); 
    tekrardene.textContent = "";
});

function kutulariOlustur(kutuSayisi) {
    kutuContainer.innerHTML = ""; 
    var kutular = [];
    for (var i = 0; i < kutuSayisi; i++) {
        var R = parseInt(Math.random() * 256);
        var G = parseInt(Math.random() * 256);
        var B = parseInt(Math.random() * 256);
        var kutu = document.createElement("div");
        kutu.classList.add("kutu");
        kutu.style.background = "rgb(" + R + "," + G + "," + B + ")";
        kutular.push(kutu);
        
        kutu.addEventListener("click", function() {
            if (this.style.background === renkKodu.textContent) {
                baslikbar.style.background = this.style.background;
                baslik.style.background = this.style.background;
                tekrardene.textContent = "TEBRİKLER!";
                tekrardene.style.color = "green"; 

                var renk = this.style.background;
                kutular.forEach(function(kutu) {
                    kutu.style.background = renk;
                });
            } else {
                this.style.visibility = "hidden";
                tekrardene.textContent = "TEKRAR DENE";
                tekrardene.style.color = "red";
            }
        });
        kutuContainer.appendChild(kutu);
    }
    var x = parseInt(Math.random() * kutuSayisi);
    renkKodu.textContent = kutular[x].style.background;
}

function seviyeyiAyarla(yeniSeviye) {
    console.log("Yeni seviye: " + yeniSeviye);
}

kutulariOlustur(3);
