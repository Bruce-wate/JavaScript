function gerar(){
    var inp = document.querySelector("input#INP")
    var res = document.querySelector("div#res")

    //Convertendo o valor do input para number 
    var n1 = Number(inp.value)

   if (n1 == 0){
        window.alert("ERRO! ADICIONE UM VALOR PARA GERAR A TABUADA")
   } else {
        res.innerHTML = ""
        for (var i = 1; i <= 10; i++){
            var item = document.createElement("option")
            item.text = `${n1} x ${i} = ${n1 * i}`
            res.appendChild(item)
   }
}
}