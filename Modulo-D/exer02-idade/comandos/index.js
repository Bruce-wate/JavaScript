function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var boxyear = window.document.querySelector("input#nasc")
    var res = window.document.querySelector("div#res")

    if(boxyear.value.length == 0 || boxyear.value > ano){
        window.alert("[ERRO] Verifique se os seus dados estão coretos")
    } else {
        var radiogender = window.document.getElementsByName("text")
        var idade = ano - Number(boxyear.value)
        var genero = ""
        var img = document.createElement ("img") //Criamos a tag "img dentro do js usando o createElement"
        img.setAttribute("id", "foto") //Atribuimos um id chamado "foto" para a váriavel "Img" que contem o elemento "img"
        var box = document.querySelector("main")
        

        if (radiogender[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'fotos/manKid.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotos/manjovem.png')
            } else if (idade > 21 && idade <= 55){
                //Adulto
                img.setAttribute('src', 'fotos/manAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos/manIdoso.png')
            }

        } else if(radiogender[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "fotos/girlKid.png")
            } else if (idade < 21){
                //Jovem
                img.setAttribute("src", "fotos/girljovem.png")
            } else if (idade > 21 && idade <= 55){
                //Adulto
                img.setAttribute("src", "fotos/girlAdulta.png")
            } else {
                //Idoso
                img.setAttribute("src", "fotos/girlIdosa.png")
            }
        } 

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.style.textAlign = "center"
        box.style.height = "400px"
        
        res.appendChild(img)
    }

}