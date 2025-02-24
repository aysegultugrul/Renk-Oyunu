var renkKodu = document.querySelector(".renkKodu");
var yeniRenk = document.querySelector(".yeniRenk");
var tekrardene = document.querySelector(".tekrardene");
var kutu = document.querySelectorAll(".kutu");
var baslikbar = document.querySelector("#baslikbar");
var baslik = document.querySelector(".baslik");
for (var i = kutu.length - 1; i >= 0; i--) {
	var R = parseInt(Math.random()*256);
	var G = parseInt(Math.random()*256);
	var B = parseInt(Math.random()*256);
	kutu[i].style.background="rgb("+R+","+G+","+B+")";
	kutu[i].addEventListener("click",function(){
		if (kutu[0].style.background===kutu[1].style.background) {
			kutu[0].style.visibility = "inherit";
			kutu[1].style.visibility = "inherit";
			kutu[2].style.visibility = "inherit";
			kutu[3].style.visibility = "inherit";
			kutu[4].style.visibility = "inherit";
			kutu[5].style.visibility = "inherit";
		}else{
			this.style.visibility = "hidden";
		}
		if (this === kutu[x]) {
			kutu[0].style.visibility = "inherit";
			kutu[1].style.visibility = "inherit";
			kutu[2].style.visibility = "inherit";
			kutu[3].style.visibility = "inherit";
			kutu[4].style.visibility = "inherit";
			kutu[5].style.visibility = "inherit";
			tekrardene.style.color = "red";
			tekrardene.style.fontSize = "2vw";
			tekrardene.style.left = "40%";
			tekrardene.style.top = "0.2vw";
			tekrardene.style.textShadow = "0 0 0.2vw black";
		}
		tekrardene.style.display = "inline-block";
	});
}

var x = parseInt(Math.random()*6);
renkKodu.textContent = kutu[x].style.background;
kutu[x].addEventListener("tıkla!",function(){
	baslikbar.style.background = this.style.background;
	baslik.style.background = this.style.background;
	kutu[0].style.background = this.style.background;
	kutu[1].style.background = this.style.background;
	kutu[2].style.background = this.style.background;
	kutu[3].style.background = this.style.background;
	kutu[4].style.background = this.style.background;
	kutu[5].style.background = this.style.background;
	yeniRenk.textContent = "Tekrar Oynamak İster Misin?";
	tekrardene.textContent = "TEBRİKLER!";
}); 


