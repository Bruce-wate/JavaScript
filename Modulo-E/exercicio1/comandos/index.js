function contar(){
    var INPT1 = document.querySelector("input#INPUT1")
    var INPT2 = document.querySelector("input#INPUT2")
    var step = document.querySelector("input#passo")
    var ans = document.querySelector("div#res")

    var n1 = Number(INPT1.value)
    var n2 = Number(INPT2.value)
    var Pa = Number(step.value)

    if (n1 == 0 || n2 == 0 || Pa == 0){
        alert("Erro! Preencha todos os campos!")
    } else {
        ans.innerHTML = "Contando: <br>"
        if (n1 < n2){
            for (var c = n1; c <= n2; c += Pa){
                ans.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = n1; c >= n2; c -= Pa){
                ans.innerHTML += `${c} \u{1F449}`
            }
        }
        ans.innerHTML += `\u{1F3C1}`
    }
}   
