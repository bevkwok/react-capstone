import express from 'express'
import { addProduct, getAllProducts, getProduct } from '../controllers/productController'

const router = express.Router()

router.get("/products", getAllProducts)

router.get("/product/:id", getProduct)

router.post("/product", addProduct)

export { router as productRouter }