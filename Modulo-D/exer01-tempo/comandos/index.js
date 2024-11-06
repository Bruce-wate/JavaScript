function carregar(){
    var msg = window.document.querySelector("div#msg")
    var photo = window.document.querySelector("div#photo")
    var corpo = window.document.querySelector("body#corpo")
    var tempo = new Date()
    var horas = tempo.getHours()
    
    msg.innerHTML = `Agora são ${horas} horas.` 
    
    if (horas > 0 && horas < 12){
        imagem.src = "photo/manha01.png" 
        corpo.style.background = "lightblue";
        foot.style.color = "black"

    } else if (horas >= 12 && horas < 18){
        imagem.src = "photo/tarde01.png"
        corpo.style.background = "rgba(167, 111, 8, 0.829)";

    } else {
        imagem.src = "photo/fotonoite.webp"
        corpo.style.background = "rgba(0, 0, 0, 0.726)";
    }
}