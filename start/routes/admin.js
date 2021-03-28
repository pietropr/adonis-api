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

  /*
  User routes
  */
  Route.resource('users', 'UserController')

}).prefix('admin').namespace('Admin')
