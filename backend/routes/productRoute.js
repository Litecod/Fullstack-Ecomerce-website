import express from "express"
import {addProduct, listProduct, removeProduct, singleProduct} from "../controllers/productController.js"

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/list", listProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);

export default productRouter;