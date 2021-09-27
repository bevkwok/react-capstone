import { useEffect } from 'react'
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';

const HomePage = () => {

    // const [products, setProducts]: [Product[], (products: Product[]) => void] = useState<Product[]>([])
    // const [loading, setLoading]: [boolean, SetLoading] = useState<boolean>(false)
    // const [error, setError]: [string, SetError] = useState<string>('')
    
    const dispatch = useDispatch()
    const productList = useSelector((state: {productList: ProductsState}) =>  state.productList);
    const { loading, error, products } = productList;

    
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true)
    //             const { data } = await axios.get("/api/products")
    //             setLoading(false)
    //             setProducts(data)
    //         } catch(err: any) {
    //             setError(err.message)
    //             setLoading(false)
    //         }
    //     }
    //     fetchData();
    // }, [])

    return (
        <div>
            {
                
                loading ? <LoadingBox />
                :
                error ? <MessageBox variant="error" message={error}/>
                :
                <div className="row center">
                    {
                        products.map(product => (
                            <Product key={product._id} product={product} />
                            ))
                    }
                </div>
            }
        </div>
    )
}

export default HomePage