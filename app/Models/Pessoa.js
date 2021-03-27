'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pessoa extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  projeto() {
    return this.hasMany('App/Models/Projeto')
  }

}

module.exports = Pessoa
