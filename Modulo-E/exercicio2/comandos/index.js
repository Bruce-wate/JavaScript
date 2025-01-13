function gerar(){
    var inp = document.querySelector("input#INP")
    var gerador = document.querySelector("input#gerador")
    var res = document.querySelector("div#res")

    //Convertendo o valor do input para number 
    var n1 = Number(inp.value)

    for (let i = n1; i <= 10; i ++){
        res.innerHTML = n1
    }   
}