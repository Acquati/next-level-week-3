import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

// Rota para listar usuários = /users
// Recurso => usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT/PATCH = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/api/users?search=diego
// Route Params: http://localhost:3333/api/users/1 (identificar um recurso)
// Body: http://localhost:3333/api/users (Identificar um recurso)

// app.get('/api/users/:id', (request, response) => {
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello World!' })
// })

// Driver nativo (sqlite3), Query builder (knex.js), ORM (Object Relational Mapping)

// index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes