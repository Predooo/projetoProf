//Conexao com o BD
const Sequelize = require('sequelize');
const { type } = require('express/lib/response');

const sequelize = new Sequelize('arvoresdocampus', 'root', 'mynewpassword', {
    host: "localhost",
    dialect: 'mysql'
}).then(()=>{
    console.log("Conectado ao banco!")
})

const arvoresCampus1 = sequelize.define('arvorescampu', {
    familia:{type: Sequelize.TEXT},
    especie:{type: Sequelize.TEXT},
    autor: {type: Sequelize.TEXT},
    nomePopular:{type: Sequelize.TEXT},
    tipoCaule:{type: Sequelize.TEXT},
    tipoFolha:{type: Sequelize.TEXT},
    filotaxia:{type: Sequelize.TEXT},
    forma:{type: Sequelize.TEXT},
    margem:{type: Sequelize.TEXT},
    apice:{type: Sequelize.TEXT},
    base:{type: Sequelize.TEXT},
    nervacao:{type: Sequelize.TEXT},
    consistencia:{type: Sequelize.TEXT},
    pilosidade:{type: Sequelize.TEXT},
    caracteresEspeciaisFolha:{type: Sequelize.TEXT},
    aparenciaRitidoma:{type: Sequelize.TEXT},
    deiscenciaRitidoma:{type: Sequelize.TEXT},
    texturainterna:{type: Sequelize.TEXT},
    corCascaInterna:{type: Sequelize.TEXT},
    caracteresEspeciaisCaule:{type: Sequelize.TEXT},
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    arvoresCampus: arvoresCampus1
}