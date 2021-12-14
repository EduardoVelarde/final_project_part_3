import express from 'express'
import {productDao,cartsDao} from '../src/daos/index.js'

const {Router}=express

const router=new Router()

router.get("/getAll",async(req,res)=>{
    const product=await productDao.getAll()
    res.send({mesg:'SUCCESS',data:product})
})

router.get("/getProduct",async(req,res)=>{
    let id=req.query.id
    const product=await productDao.getById(id)
    res.send({mesg:'SUCCESS',data:product})
})

router.post("/saveProduct",async(req,res)=>{
    const product=await productDao.save(req.body)
    res.send({mesg:'SUCCESS',data:product})
})
router.put("/updateProduct",async(req,res)=>{
    let {id,name,price,description,url,stock}=req.body
    const product=await productDao.updateById(id,name,price,description,url,stock)
    res.send({mesg:'SUCCESS',data:product})
})
router.delete("/deleteProduct",async(req,res)=>{
    let id=req.query.id
    const product=await productDao.deleteByID(id)
    res.send({mesg:'SUCCESS',data:product})
})
router.delete("/deleteAllProduct",async(req,res)=>{
    const product=await productDao.deleteAll()
    res.send({mesg:'SUCCESS',data:product})
})

export default router