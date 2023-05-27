const prompt = require("prompt-sync")();

var Nome = prompt("Olá, como é seu nome?");
var Idade = Number(prompt("Qual a sua idade?"));
var DiasAno = 365
var IdadeDias = Idade * DiasAno

console.log(`Seu nome é: ${Nome}
Sua idade é: ${IdadeDias}`);