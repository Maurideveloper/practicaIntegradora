import { Router } from "express";
import cartModel from "../dao/model/carts.model.js";

const router = Router();

//todo mediante postman

router.get("/", async(req,res)=>{
    try {
        let users = await cartModel.find()
        res.send({ result: "success", payload: users })
    } catch (error) {
        
    }
})

//emvia informacion
router.post("/", async(req,res)=>{
    let {tipo_chocolate, descripcion} = req.body

    if(!tipo_chocolate || !descripcion) {
        res.send({status: "error", error:"Faltan datos"})
    }

    let result = await cartModel.create({tipo_chocolate, descripcion})
    res.send({result: "success", payload: result})
})

//recibe id y modifica
router.put("/:uid", async(req,res)=>{
    let { uid } = req.params;
    let productToReplace = req.body;

    if(!productToReplace.tipo_chocolate || !productToReplace.descripcion) {
        res.send({ status: "error", error:"Faltan datos" })
    }

    let result = await cartModel.updateOne({ _id: uid }, productToReplace);
    res.send({ result: "success", payload: result })
})

//recibe id Y elimina
router.delete ("/:uid", async(req,res)=>{
    let { uid } = req.params;
    let result = await cartModel.deleteOne({_id: uid})
    res.send({result: "success", payload: result})
})

export default router;