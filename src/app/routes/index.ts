import { Router } from 'express'
import { UserController } from '../controllers/user';

const routes = Router()
const userController = new UserController()

routes.get('/users', userController.list)
routes.post('/users', userController.handle)
routes.get('/', (req, res) => res.send("Olá Mano"))


export default routes;