import { productModelInterface, ProductDoc } from '../interfaces/product'
import { model, Schema } from 'mongoose'


const productSchema: Schema = new Schema({
    name: { type: String, unique: true, required: true },
    image: { type: String, unique: true, required: true},
    category: { type: String, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true }
}, { timestamps: true })

const Product = model<ProductDoc, productModelInterface>('Product', productSchema)


export { Product }