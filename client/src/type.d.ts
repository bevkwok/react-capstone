interface IUser {
    _id: string
    email: string
    password: string
    createdAt?: string
    updatedAt?: string
}

type ApiDataType = {
    message: string
    status: string
    users: IUser[]
    user?: IUser
} 

type userAction = {
    type: string,
    grocery: IGrocery
}

type Product = {
    _id: string
    name: string
    category: string
    image: string
    price: number
    countInStock: number
    rating: number
    numReviews: number
    description: string
}

type SetLoading = (loading: boolean) => void;
type SetError = (error: any) => void;
