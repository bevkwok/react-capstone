import { Document, Model } from "mongoose"

// have all properties of mongoose.Document interface
export interface ProductDoc extends Document {
    name: string
    category: string
    image: string
    price: number
    countInStock: number
    rating: number
    numReviews: number
    description: string
}

export interface productModelInterface extends Model<ProductDoc> {
    build(attr: ProductDoc): ProductDoc
}