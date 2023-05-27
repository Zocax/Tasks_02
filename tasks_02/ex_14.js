const prompt = require("prompt-sync")();

var years1 = Number(prompt("Escreva aqui o ano 1: "));
var years2 = Number(prompt("Escreva aqui o ano 2: "));

var months1 = Number(prompt("Escreva aqui o mes 1: "));
var months2 = Number(prompt("Escreva aqui o mes 2: "));

var days1 = Number(prompt("Escreva aqui o dia 1: "));
var days2 = Number(prompt("Escreva aqui o dia 2: "));

//calculos

var yearsdifference = years1 - years2;
var monthdifference = months1 - months2;
var daysdifference = days1 - days2;

//console.log

console.log(`A diferença entre anos é: ${yearsdifference}
A diferença entre meses é: ${monthdifference}
A diferença entre dias é: ${daysdifference}`);