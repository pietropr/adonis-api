'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPessoaSchema extends Schema {
  up() {
    this.table('pessoas', (table) => {
      table.foreign('user_id').references('id').on('users').onDelete('cascade')
    })
  }

  down() {
    this.table('pessoas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserPessoaSchema
