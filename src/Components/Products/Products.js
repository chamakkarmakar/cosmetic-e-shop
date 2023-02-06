import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])

    return (
        <div className='my-5 ms-5'>
            <h1 className='fs-2 fw-bolder text-center my-3'>Our Products</h1>
            <div className='row gap-4'>
            {
                products.slice(0,8).map(product=>
                    <Product
                    key={product.id}
                   product={product}
                    ></Product>
                    )
                   
            }
             </div>
        </div>
    )
}

export default Products
