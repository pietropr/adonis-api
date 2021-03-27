'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategoriaSeeder {
  async run() {
    const categorias = await Factory.model('App/Models/Categoria').createMany(10)
  }
}

module.exports = CategoriaSeeder
