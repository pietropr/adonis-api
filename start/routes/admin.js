'use strict'
const Route = use('Route')

Route.group(() => {
  /*
  Categories routes
  */
  Route.resource('categoria', 'CategoryController')

}).prefix('admin').namespace('Admin')
