import db from './db'
import usePromise from '../helpers/errorHandling'
const {QUERY_GETPRODUCTS} = process.env

async function getProductsFromDatabase() {
  const query = QUERY_GETPRODUCTS
  const [rows] = await db.query(query)

  return rows
}

export default getProductsFromDatabase