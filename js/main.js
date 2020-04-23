
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