'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/User', faker => {
  return {
    username: faker.username(),
    email: faker.email({domain: 'ae.digital'}),
    password: 'password'
  }
})

Factory.blueprint('App/Models/Categoria', faker => {
  const title = faker.country({full: true})
  return {
    nome: title,
  }
})

Factory.blueprint('App/Models/Pessoa', faker => {
  const title = faker.country({full: true})
  const slug = title.replaceAll(' ', '-', title)
  slug.toLowerCase()
  return {
    nome: faker.name({nationality: 'en'}),
    sexo: (Math.random() >= 0.5) ? 1 : 0,
    cpf: faker.cpf(),
  }
})

