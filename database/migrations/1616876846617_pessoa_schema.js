'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoaSchema extends Schema {
  up() {
    this.create('pessoa', (table) => {
      table.increments()
      table.string('nome', 60).notNullable()
      table.boolean('sexo').notNullable()
      table.string('cpf', 11).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('pessoa')
  }
}

module.exports = PessoaSchema
