'use strict'
const Route = use('Route')

Route.group(() => {
  /*
  Categories routes
  */
  Route.resource('categorias', 'CategoriaController')

  /*
  Projetos routes
  */
  Route.resource('projetos', 'ProjetoController')

  /*
  Pessoa routes
  */
  Route.resource('pessoas', 'PessoaController')

}).prefix('admin').namespace('Admin')
