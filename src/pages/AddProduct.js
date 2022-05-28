import React from 'react'
import { ProductList } from './ProductList'

export const AddProduct = () => {
    var products = [
        {
            name:"iphone",
            id:101
        },
        {
            name:"samsung",
            id:102
        }
    ]
    return (
        <div>
            {
                products.map((product)=>{

                    return <ProductList products={product}/>
                })
            }
        </div>
    )
}
