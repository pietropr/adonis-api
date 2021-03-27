'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

  projeto() {
    return this.hasMany('App/Models/Projeto')
  }

}

module.exports = Categoria
