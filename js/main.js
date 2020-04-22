
/* Pour le menu mobile */
var m = document.getElementById("mMobile");
var menu = document.getElementById("menu");
if(m.style.display == "none"){
	menu.style.display="block";
}

m.addEventListener('click', async function(){
	
	if(menu.style.display == "none"){
		menu.style.display="block";
	}else{
		menu.style.display="none";
	}
});

/* Pour le diapo */
/*var nb = -1;
StartTimer();
setInterval("StartTimer()", 5000);

function StartTimer(){
  
  	var liste = ["equipe.jpg", "fred.jpg", "arseneLivre.png", "ensRepet.jpeg", "julietteENS.png", "Equipe2.jpeg",  "genre1.jpg", "ensRepet2.jpeg"];
  	console.log("avant incr" + nb)
  	
  	nb+=1;
  	if(nb == 8){
  		nb = 0;
  	}

  	var picture = liste[nb];
  	console.log("apres incr "+ nb);
	document.getElementById("diapo").innerHTML = "<img id='img_accueil' src='images/"+ picture +"'>";
}*/

let fd = document.getElementById("fDroite2");
let fg = document.getElementById("fGauche2");
var liste = ["equipe.jpg", "fred.jpg", "arseneLivre.png", "ensRepet.jpeg", "julietteENS.png", "Equipe2.jpeg",  "genre1.jpg", "ensRepet2.jpeg"];

nb = 0;
fd.addEventListener('click', async function(){

  nb+=1;
  if(nb == 8){
    nb = 0;
  }

  var picture = liste[nb];

  console.log("apres incr "+ nb);
  document.getElementById("diapo").innerHTML = "<img id='img_accueil' src='images/"+ picture +"'>";

})

fg.addEventListener('click', async function(){

  nb-=1;
  if(nb == -1){
    nb = 7;
  }

  var picture = liste[nb];

  console.log("apres incr "+ nb);
  document.getElementById("diapo").innerHTML = "<img id='img_accueil' src='images/"+ picture +"'>";

})