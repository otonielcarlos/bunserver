import { Hono } from "hono";
import { prettyJSON } from 'hono/pretty-json'
import productsV1  from './v1/routes/products'
const app = new Hono();


const port = parseInt(process.env.PORT) || 3000;
app.use('*', prettyJSON({ space: 2 }))
app.route('/api/v1/products/', productsV1)


const home = app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: home.fetch,
};
