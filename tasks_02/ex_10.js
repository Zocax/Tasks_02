const prompt = require("prompt-sync")();

var note5 = Number(prompt("Escreva a quantidade de notas de 5 reais:"))
var note10 = Number(prompt("Escreva a quantidade de notas de 10 reais:"))
var note20 = Number(prompt("Escreva a quantidade de notas de 20 reais:"))
var note50 = Number(prompt("Escreva a quantidade de notas de 50 reais:"))
var note100 = Number(prompt("Escreva a quantidade de notas de 100 reais:"))
var note200 = Number(prompt("Escreva a quantidade de notas de 200 reais:"))

//calculos

var calculation5 = note5 * 5
var calculation10 = note10 * 10
var calculation20 = note20 * 20
var calculation50 = note50 * 50
var calculation100 = note100 * 100
var calculation200 = note200 * 200
var resultall = calculation5 + calculation10 + calculation20 + calculation50 + calculation100 + calculation200

//console.log

console.log(`Valor total é: $${resultall},00`);