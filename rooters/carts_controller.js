import express from 'express'
import {productDao,cartsDao} from '../src/daos/index.js'
import {auth,authAdmin} from '../src/utils/middlewares.js'
const {Router}=express

const router=new Router()

router.post("/createCart",auth,async(req,res)=>{
    const currentUser = req.user
    const cart=await cartsDao.createCart(currentUser)
    res.send({mesg:'SUCCESS',data:cart})
})
router.delete("/deleteCart",auth,async(req,res)=>{
    const cart=await cartsDao.deleteCart()
    res.send({mesg:'SUCCESS',data:cart})
})
router.get("/showAllItems",auth,async(req,res)=>{
    const currentUser = req.user
    const cart=await cartsDao.showAllItems(currentUser)
    res.send({mesg:'SUCCESS',data:cart})
})
router.post("/addItems",auth,async(req,res)=>{
    let {id,idProduct}=req.query
    const product= await productDao.getById(idProduct)
    const cart=await cartsDao.addItems(id,product)
    res.send({mesg:'SUCCESS',data:cart})
})
router.delete("/deleteItems",auth,async(req,res)=>{
    let {id,idProduct}=req.query
    const product= await productDao.getById(idProduct)
    const cart=await cartsDao.deleteItem(id,product)
    res.send({mesg:'SUCCESS',data:cart})
})

export default router