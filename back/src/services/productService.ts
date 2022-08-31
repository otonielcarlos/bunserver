import getProductsFromDatabase from '../database/products'
import usePromise from '../helpers/errorHandling'

async function getProductsFromService() {
  const [data, error] = await usePromise(getProductsFromDatabase)
  if(error) return error

  return data
}

export default getProductsFromService
