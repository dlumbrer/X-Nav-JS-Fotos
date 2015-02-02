          
function imgrandom(destino){
    fotos = document.getElementsByClassName(destino);
	for(var i = 0; i<fotos.length; i++){
		fotos[i].style.display = "none";
	}
    fotos[Math.round(Math.random()*(fotos.length-1))].style.display = "inline"
}
        
