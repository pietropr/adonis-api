'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projeto extends Model {

  pessoa() {
    return this.belongsTo('App/Models/Pessoa')
  }

  categoria() {
    return this.belongsTo('App/Models/Categoria')
  }

}

module.exports = Projeto
