'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoaSchema extends Schema {
  up() {
    this.create('pessoas', (table) => {
      table.increments()
      table.integer('user_id', 60).unsigned()
      table.string('nome', 60).notNullable()
      table.boolean('sexo').notNullable()
      table.string('cpf', 11).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('pessoas')
  }
}

module.exports = PessoaSchema
