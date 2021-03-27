'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up() {
    this.create('categorias', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('slug').notNullable()
      table.json('image').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
