const prompt = require("prompt-sync")();

var value = Number(prompt("Escreva um valor:"));

//calculos

var note1 = value - value + value;
var note5 = value / 5;
var note10 = value / 10;
var note20 = value / 20;
var note50 = value / 50;
var note100 = value / 100;

//console.log

console.log(`São nescessarias ${note1} notas de 1 real para chegar ao valor total: 
São nescessarias ${note5} notas de 5 reais para chegar ao valor total. 
São nescessarias ${note10} notas de 10 reais para chegar ao valor total. 
São nescessarias ${note20} notas de 20 reais para chegar ao valor total. 
São nescessarias ${note50} notas de 50 reais para chegar ao valor total. 
São nescessarias ${note100} notas de 100 reais para chegar ao valor total. `);