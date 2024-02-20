import { Router } from "express";
import productModel from "../dao/model/product.model.js";

const router = Router();

//todo mediante postman

router.get("/", async(req,res)=>{
    try {
        let users = await productModel.find()
        res.send({ result: "success", payload: users })
    } catch (error) {
        
    }
})

//emvia informacion
router.post("/", async(req,res)=>{
    let {nombre, descripcion, precio} = req.body

    if(!nombre || !descripcion || !precio) {
        res.send({status: "error", error:"Faltan datos"})
    }

    let result = await productModel.create({nombre, descripcion, precio})
    res.send({result: "success", payload: result})
})

//recibe id y modifica
router.put("/:uid", async(req,res)=>{
    let { uid } = req.params;
    let productToReplace = req.body;

    if(!productToReplace.nombre || !productToReplace.descripcion || !productToReplace.precio) {
        res.send({ status: "error", error:"Faltan datos" })
    }

    let result = await productModel.updateOne({ _id: uid }, productToReplace);
    res.send({ result: "success", payload: result })
})

//recibe id Y elimina
router.delete ("/:uid", async(req,res)=>{
    let { uid } = req.params;
    let result = await productModel.deleteOne({_id: uid})
    res.send({result: "success", payload: result})
})

export default router;