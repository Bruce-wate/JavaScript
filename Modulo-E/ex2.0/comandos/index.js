function Gerar(){
    var Num = document.querySelector("input#Inumber")
    var list = document.querySelector("select#list")

    var n1 = Number(Num.value)
    
    if (n1 == 0){
        window.alert("ERRO! Por favor, Preencha o campo vazio para poder criar uma tabuada")
    } else {
        for(var i = 0; i <= 10; i++){
            var item = document.createElement("option")
            item.text = `${n1} x ${i} = ${n1*i}`
            list.appendChild(item)
        }
    }

}