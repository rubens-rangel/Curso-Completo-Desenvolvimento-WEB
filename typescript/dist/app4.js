"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { PessoaDao } from './PessoaDao'
// import { ConcessionariaDao } from "./ConcessionariaDao"
var Concessionaria_1 = require("./Concessionaria");
var Dao_1 = require("./Dao");
var Pessoa_1 = require("./Pessoa");
// let dao: ConcessionariaDao = new ConcessionariaDao()
// let dao2: PessoaDao = new PessoaDao()
var concessioaria = new Concessionaria_1.Concessionaria('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessioaria);
dao4.remover(5);
