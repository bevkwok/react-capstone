import { Response, Request } from 'express'
import data from '../productData'

const getProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        const products = data.products;
        res.status(200).json({ products })
    } catch (error) {
        throw error
    }
}

export { getProducts }