'use strict'
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'CategoryController.index').as('categoria.index')
}).prefix('categoria').namespace('Categoria')
