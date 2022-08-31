import {createPool} from 'mysql2/promise'

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env

export default createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  multipleStatements: true, 
})

