


let name = prompt("Olá, qual seu nome ?")
alert("Bem vindo " + name + ", vamos comoçar com nosso jogo, preciso que digite dois números. ")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("A soma é " + sum)
alert("A subtração é " + sub)
alert("A multiplicação é " + multi)
alert("A divisão é " + div)
alert("O resto da divisão é " + restDiv)


if (sum % 2 === 0) {
  alert("A soma dos dois números é par: " + sum);
} else {
  alert("A soma dos dois números é ímpar: " + sum);
}

if(numberOne === numberTwo) {
  alert("Os números digitados são iguais.")
}

else {
  alert("Os números digitados são diferentes.")
}