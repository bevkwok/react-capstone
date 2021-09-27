import { Response, Request } from 'express'
import data from '../productData'

const getProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(data.products)
    } catch (error) {
        throw error
    }
}

const getProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const product = data.products.find(product => product._id === req.params.id);
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).send("Product not found") 
        }
    } catch (error) {
        throw error
    }
}

export { getProducts, getProduct }