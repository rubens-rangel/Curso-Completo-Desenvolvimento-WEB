"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
// criar carros --- 
var carroA = new Carro_1.Carro('dodge journey', 4);
var carroB = new Carro_1.Carro('veloster', 3);
var carroC = new Carro_1.Carro('cerato', 4);
// montar a lista de carros da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())
// comprar carro
var cliente = new Pessoa_1.Pessoa('Joao', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
