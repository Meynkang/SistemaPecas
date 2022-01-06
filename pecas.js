let pesoPeca = 100

if(pesoPeca > 100){
    console.log("peso maior que 100, logo, pode cadastrar")
} else {
    console.log("peso insuficiente, não é possível cadastrar")
}

let numeroPecas = 11

if(numeroPecas < 10){
    console.log("menos de 10 pecas, pode cadastrar")
} else {
    console.log("mais de 10 pecas, não é possível cadastrar")
}

let nomePeca = "Di"

console.log("o comprimento do nome da peça é:", nomePeca.length)
if(nomePeca.length < 3){
    console.log("número de caracteres insuficiente")
} else {
    console.log("cadastrado!")
}