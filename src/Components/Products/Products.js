import React, { useEffect } from 'react'
import Product from './Product';


const Products = ({products,setProducts,handleCart}) => {
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [setProducts])

    return (
        <div className='my-5 ms-5'>
            <h1 className='fs-2 fw-bolder text-center my-3'>Our Products</h1>
            <div className='row gap-4'>
                {
                    products.slice(0, 8).map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleCart={handleCart}
                        ></Product>
                    )

                }
            </div>          
        </div>
    )
}

export default Products
