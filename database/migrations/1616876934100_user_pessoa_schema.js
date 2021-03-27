'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPessoaSchema extends Schema {
  up() {
    this.table('users', (table) => {
      table.foreign('pessoas_id').references('id').on('pessoas').onDelete('cascade')
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserPessoaSchema
