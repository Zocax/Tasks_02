const prompt = require("prompt-sync")();

var hours = Number(prompt("Escreva aqui as horas: "));
var minutes = Number(prompt("Escreva aqui os minutos: "));
var secunds = Number(prompt("Escreva aqui os segundos: "));
var secundshours = 3600
var secundsminutes = 600

//calculos

var calculation_hours = hours * secundshours
var calculation_minutes = minutes * secundsminutes
var calculation_secunds = secunds
var resultall = calculation_hours + calculation_minutes + calculation_secunds

//console.log

console.log(resultall);