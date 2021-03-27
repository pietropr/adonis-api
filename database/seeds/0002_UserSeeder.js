'use strict'

/*
|--------------------------------------------------------------------------
| PessoaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')
const User = use('App/Models/User')

class UserSeeder {
  async run() {

    const role = await Role.findBy('slug', 'funcionario')
    const funcionarios = await Factory.model('App/Models/User').createMany(10)
    await Promise.all(
      funcionarios.map(async func => {
        await func.roles().attach([role.id])
      }))

    const admin = await User.create({
      username: 'pietro',
      email: 'pietropinton@gmail.com',
      password: 'password',
    })
    const adminRole = await Role.findBy('slug', 'admin')
    await admin.roles().attach([adminRole.id])
  }
}

module.exports = UserSeeder
