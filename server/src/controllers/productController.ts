import { Response, Request } from 'express'
import { ProductDoc } from '../interfaces/product'
import { Product } from '../models/productModel'

const getAllProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        const products: ProductDoc[] = await Product.find()
        if (products.length === 0) {
            res.status(404).send({ message: "Product List is empty"})
        }
        res.status(200).json({ products })
    } catch (error) {
        throw error
    }
}

const getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        let product: ProductDoc | null = await Product.findById(id)
        if (!product) {
            res.status(404).send({ message: "Can't find the product you are looking for"})
        }
        res.status(200).json({ product })
    } catch (error) {
        throw error
    }
}

const addProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body

        console.log(body);

        const product: ProductDoc = new Product({
            name: body.name,
            category: body.category,
            image: body.image,
            price: body.price,
            countInStock: body.countInStock,
            rating: body.rating,
            numReviews: body.numReviews,
            description: body.description
        })

        const newProduct: ProductDoc = await product.save()

        res
            .status(201)
            .json({ message: "Product added", product: newProduct })
    } catch (error) {
        throw error
    }
}

export { getAllProducts, getProduct, addProduct }



