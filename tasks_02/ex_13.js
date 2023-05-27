const prompt = require("prompt-sync")();

var secunds = Number(prompt("Escreva aqui o valor em segundos: "));
var hours = 3600
var minutes = 600

//calculos

var valuehours = secunds / hours
var valueminutes = secunds / 600
var valuesecunds = secunds

//console.log

console.log(`Valor em horas: ${valuehours}
Valor em minutos: ${valueminutes}
Valor em segundos: ${valuesecunds}`);