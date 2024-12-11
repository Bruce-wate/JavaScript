function contar(){
    var inpt1 = window.document.querySelector("input#INP1")
    var inpt2 = window.document.querySelector("input#INP2")
    var passos = window.document.querySelector("input#step")
    var count = window.document.querySelector("input#contador")
    var res = window.document.querySelector("div#res")
    var corpo = document.querySelector("main")
    corpo.style.height = "300px";
    
    var n1 = Number(inpt1.value)
    var n2 = Number(inpt2.value)
    var p = Number (passos.value)

    if (n1 == 0){
        window.alert("Por favor, insira o valor do  INICIO")
    } else if (n2 == 0){
        window.alert("Por favor, insira o valor do FIM")
    } else if (p == 0){
        window.alert("Por favor, insira os passos entre os números")
    } else {
        res.innerHTML = ("Contando... ")

        for (c = n1; c <= n2; c += p)
        res.innerHTML += c + ` \u{1F449} `   

        for (c = n1; c >= n2; c -= p)
        res.innerHTML += c + ` \u{1F449} `   
    
    } 

    res.innerHTML +=  ` \u{1F3C1} ` 
    
    
    }