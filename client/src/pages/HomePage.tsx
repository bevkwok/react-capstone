import React, { useState, useEffect } from 'react'
import Product from '../components/Product';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts]: [Product[], (products: Product[]) => void] = useState<Product[]>([])
    const [loading, setLoading]: [boolean, SetLoading] = useState<boolean>(false)
    const [error, setError]: [boolean, SetError] = useState<boolean>(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get("/api/products")
                setLoading(false)
                setProducts(data)
            } catch(err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                loading ? <p>Still Loading</p>
                :
                error ? <p>{error}</p>
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