'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPessoaSchema extends Schema {
  up() {
    this.table('user', (table) => {
      table.foreignKey('pessoa_id').references('id').inTable('pessoa').onDelete('cascade')
    })
  }

  down() {
    this.table('user_pessoas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserPessoaSchema
