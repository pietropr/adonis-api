'use strict'
const Route = use('Route')

Route.group(() => {
  Route.post('/register', 'AuthController.register').as('auth.register')
  Route.post('/login', 'AuthController.login').as('auth.login')
  Route.post('/refresh', 'AuthController.refresh').as('auth.refresh')
  Route.post('/logout', 'AuthController.login').as('auth.logout')
}).prefix('v1/auth').namespace('Auth')
