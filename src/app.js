import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js"

const app = express();
const PORT = 8080;

//routes
app.get('/', (req, res)=> {
    res.send('bienvenidos')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


//para usar postman
app.use(express.json())

//Conectamos la BD
mongoose.connect("mongodb+srv://maurid2000:ar42612240@cluster0.osvn38s.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Conectado a la base de datos")
})
.catch (error => {
    console.error("Error al conectarse a la base de datos", error)
})
 
app.use ("/api/products", productsRouter);
app.use ("/api/carts", cartsRouter);