import { Concessionaria } from './Concessionaria';
import { Carro } from "./Carro"
import { Moto } from "./Moto"

let carro = new Carro('veloster', 3)

let moto = new Moto()
moto.acelerar()
moto.acelerar()
carro.acelerar()
carro.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosDeFuncionamento())