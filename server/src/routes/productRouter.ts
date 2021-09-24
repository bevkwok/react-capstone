import express from 'express'
import { getProducts } from '../controllers/productController'

const router = express.Router()

router.get("/api/products", getProducts)

export { router as productRouter }