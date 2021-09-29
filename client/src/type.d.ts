interface IUser {
    _id: string
    email?: string
    password: string
    isAdmin: boolean
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
}

type userState = {
    loading: boolean,
    userInfo: IUser | any | null,
    error?: any
}

type signinUserState = {
    loading: boolean,
    userSignin: IUser | any | null,
    error?: any
}

type IProduct = {
    _id?: any
    name: string
    category: string
    image: string
    price: number
    countInStock: number
    rating: number
    numReviews: number
    description: string
}

type ProductsState = {
    loading: boolean,
    products: IProduct[],
    error?: any
}

type ProductState = {
    loading: boolean,
    product: IProduct | any | null,
    error?: any
}

type ProductsAction = {
    type: string
    products: IProduct[]
}
type SetUsername = (username: any) => void;
type SetPassword = (password: any) => void;
type SetLoading = (loading: boolean) => void;
type SetError = (error: any) => void;

type ProductDispatchType = (args: ProductsAction) => ProductsAction

type CartItem = {
    name: string
    image: string
    price: number
    countInStock: number
    product: string
    qty: number
}

type CartItemState = {
    cartItems: CartItem[] | null
    shippingAddress: any
    paymentMethod: string
}