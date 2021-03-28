'use strict'

const Database = use('Database')
const User = use('App/Models/user')
const Role = use('Role')

class AuthController {

  async register({request, response}) {
    const trx = await Database.beginTransaction()
    try {
      const {username, email, password, repassword} = request.all()

      if (!username) {
        return response.status(400).send({data: 'Username não pode ser vazio', input: 'username'})
      }
      if (!email) {
        return response.status(400).send({data: 'Email não pode ser vazio', input: 'email'})
      }
      if (!password) {
        return response.status(400).send({data: 'Senha não pode ser vazia', input: 'password'})
      }
      if (password !== repassword) {
        return response.status(400).send({data: 'Senhas não coincidem', input: 'password'})
      }

      const user = await User.create({username, email, password}, trx)
      const userRole = await Role.findBy('slug', 'funcionario')
      await user.roles().attach([userRole.id], null, trx)

      await trx.commit()

      return response.status(201).send({data: user})

    } catch (error) {
      await trx.rollback()
      const msg = {};
      msg.message = 'Erro ao realizar cadastro'
      msg.code = 400
      msg.message_error = error.sqlMessage
      return response.status(400).send({data: msg})
    }
  }

  async login({request, response, auth}) {

  }

  async refresh({request, response, auth}) {

  }

  async logout({request, response, auth}) {

  }
}

module.exports = AuthController
