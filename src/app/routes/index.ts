import { Router } from 'express'
import { UserController } from '../controllers/user';
import { PlaceController } from '../controllers/places';
import { IngredientController } from '../controllers/ingredients';
import { ProductController } from '../controllers/products';
import { OrderController } from '../controllers/order';

const routes = Router()
const userController = new UserController()
const placeController = new PlaceController()
const ingredientController = new IngredientController()
const productController = new ProductController()
const orderController = new OrderController()

routes.get('/', (req, res) => res.send("Olá Mano"))

//cadastro de usuarios
routes.get('/users', userController.list)
routes.post('/users', userController.handle)
routes.put('/users', userController.update)
routes.delete('/users', userController.delete)

//cadastro de mesas
routes.get('/places', placeController.list)
routes.post('/places', placeController.handle)
routes.put('/places', placeController.update)
routes.delete('/places', placeController.delete)

//cadastro de ingredientes
routes.get('/ingredients', ingredientController.list)
routes.post('/ingredients', ingredientController.handle)
routes.put('/ingredients', ingredientController.update)
routes.delete('/ingredients', ingredientController.delete)

//cadastro de produtos
routes.get('/products', productController.list)
routes.post('/products', productController.handle)
routes.put('/products', productController.update)
routes.delete('/products', productController.delete)

//cadastro de vendas
routes.get('/orders', orderController.list)
routes.post('/orders', orderController.handle)
routes.put('/orders', orderController.update)
routes.delete('/orders', orderController.delete)

export default routes;
