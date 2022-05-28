import React from 'react'
import { Link } from 'react-router-dom'

export const ProductList = (props) => {
    console.log("props", props.products)
    return (
        <div>
            {
                props.products == undefined ? "NO PRODUCTS FOUND" :
                    <ul>
                        {/* <li><Link to ="../product/101">link</Link>101</li> */}
                        <li>
                            <Link to = {`../product/${props.products.id}`}>{props.products.id}</Link>
                        </li>
                        <li>{props.products.name}</li>
                    </ul>
            }


        </div>
    )
}
