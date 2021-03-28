'use strict'
const Categoria = use('App/Models/Categoria')

class CategoryController {

  async index({params}) {
    const categorias = Categoria.all()

    if (categorias) {
      return categorias
    }

  }

}

module.exports = CategoryController
