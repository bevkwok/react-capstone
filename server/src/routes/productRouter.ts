import express from 'express'
import { getProducts, getProduct } from '../controllers/productController'

const router = express.Router()

router.get("/api/products", getProducts)
router.get("/api/product/:id", getProduct)


export { router as productRouter }