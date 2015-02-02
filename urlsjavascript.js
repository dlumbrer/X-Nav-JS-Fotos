var urls = ["http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Katherine_McCook_Knox_HCFFPA001440f.jpg/415px-Katherine_McCook_Knox_HCFFPA001440f.jpg",
            "http://upload.wikimedia.org/wikipedia/commons/1/16/Tyson_Pygmy_muscles_back.jpg",
            "http://upload.wikimedia.org/wikipedia/commons/6/68/Nuremberg_chronicles_-_f_23v.png"]
            
            
function imgrandom(destino){
    foto = document.getElementById(destino);
    foto.attributes[0].nodeValue = "display:inline"
    foto.attributes[1].value = urls[Math.round(Math.random()*(urls.length-1))];
}
        
