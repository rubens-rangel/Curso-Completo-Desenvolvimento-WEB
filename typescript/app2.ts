import { Concessionaria } from './Concessionaria'
import { Pessoa } from './Pessoa'
import { Carro } from './Carro'

// criar carros --- 
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

// montar a lista de carros da concessionaria
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())

// comprar carro
let cliente = new Pessoa('Joao', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
        if(carro['modelo'] == cliente.dizerCarroPreferido()) {
            // comprar o carro
            cliente.comprarCarro(carro)
        }
})

console.log(cliente.dizerCarroQueTem())







  

