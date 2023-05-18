import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => res.send("Olá Mano"))

export default routes;