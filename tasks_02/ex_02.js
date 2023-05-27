const prompt = require("prompt-sync")();

var a = Number(prompt("Escreva o primeiro número:"))
var b = Number(prompt("Escreva o segundo número:"))
var c = Number(prompt("Escreva o terceiro número:"))

var calculoA = a - a + c
var calculoB = b - b + a
var calculoC = c - c + b

console.log(calculoA, calculoB, calculoC);