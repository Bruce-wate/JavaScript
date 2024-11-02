var povo = "0"
var policia = "1"
var hospital = "2"
var governo = "3"

if (povo > policia && policia < povo) {
    console.log("É verdade que o povo é mais importante que a policia")
} else {
    if(policia > hospital && hospital > governo){
        console.log("A policia é maior que o hospital e o hospital é maior que o governo")
    } else {
        if (povo < policia && policia < hospital && hospital < governo){
            console.log("O povo tem menor prioridade que a policia, a policia tem menor p. com o hospital e o hospital tem o p. menor que o governo")
        } else {
            console.log("Nada faz sentido")
        }
    }
}