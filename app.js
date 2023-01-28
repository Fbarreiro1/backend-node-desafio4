const express = require('express');
const productsRouter = require('./routes/products.routes.js');
const cartsRouter = require('./routes/carts.routes.js');
const app = express()
const port = 8080
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json())
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)

app.get('/', (req, res) => {
  res.send('DESAFIO 4')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})