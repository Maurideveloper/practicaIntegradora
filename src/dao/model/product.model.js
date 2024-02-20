import mongoose from "mongoose";

//implemento una coleccion nueva
const productsCollection = "products";

//instancia
const productsSchema = new mongoose.Schema({
    nombre: {type: String, requiered:true, max:100},
    descripcion: {type: String, requiered:true, max:100},
    precio: {type: Number, requiered:true, max:100000}
});

const productModel = mongoose.model(productsCollection, productsSchema);

export default productModel;

