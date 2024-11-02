console.log("========================================")
var data = new Date()
var horas = data.getHours()

console.log(`Agora são exatamnete ${horas}`)

if (horas >= 0 && horas <= 4){
    console.log("Boa madrugada")
} else if (horas > 4 && horas < 12){
    console.log("Bom dia, chefe!")
} else if (horas >= 12 && horas < 18){
    console.log("Boa tarde, Chefe!")
} else {
    console.log("Boa noite, chefe")
}


console.log("=======================================")