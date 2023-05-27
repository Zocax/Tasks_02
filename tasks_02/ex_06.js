const prompt = require("prompt-sync")();

var width = Number(prompt("Qual a largura da parede?"));
var height = Number(prompt("Qual a altura da parede?"));
var squareMeters = width * height;
var mlsquareMeters = 300;
var litersPaint = squareMeters * mlsquareMeters;
var result = litersPaint / 2000;

console.log(`
Metros quadrados: ${squareMeters}
Quantidade de latas de tinta nescessária: ${result}`);