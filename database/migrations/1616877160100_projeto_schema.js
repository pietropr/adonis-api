'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetoSchema extends Schema {
  up() {
    this.create('projetos', (table) => {
      table.increments()
      table.integer('pessoa_id').unsigned()
      table.foreign('pessoa_id').references('id').on('pessoas').onDelete('cascade')
      table.integer('categoria_id').unsigned()
      table.string('nome', 255).notNullable()
      table.string('slug', 255).notNullable()
      table.string('descricao', 255).notNullable()
      table.text('conteudo', 255).notNullable()
      table.enu('status', ['pending', 'cancelled', 'inicied', 'finished', 'delayed']).notNullable()
      table.date('finish_date').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('projetos')
  }
}

module.exports = ProjetoSchema
