import { Hono } from 'hono'
import getProducts from '../../controllers/productController'
const productsV1 = new Hono()
productsV1.get('/', getProducts )

export default productsV1