
import usePromise from '../helpers/errorHandling'
import getProductsFromService from '../services/productService'

async function getProducts (context) {
  const [products, error] = await usePromise(getProductsFromService)
  
  if(error) return context.json(error)
  
  return context.json(products)
}

export default getProducts