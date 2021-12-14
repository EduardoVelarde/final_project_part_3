import express from 'express'
import {productDao,cartsDao} from './src/daos/index.js'
import router_products from './rooters/product_controller.js'
import router_carts from './rooters/carts_controller.js'
const app=express()
const PORT=8080
app.use(express.json())

app.use("/products",router_products)
app.use("/carts",router_carts)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})