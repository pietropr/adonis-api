'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaProjetoSchema extends Schema {
  up() {
    this.table('projetos', (table) => {
      table.foreign('categoria_id').references('id').on('categorias').onDelete('cascade')
    })
  }

  down() {
    this.table('projetos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CategoriaProjetoSchema
