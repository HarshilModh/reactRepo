import React from 'react'
import { useParams } from 'react-router'

export const Product = () => {
    var params = useParams()

    return (
        <div>
            product loaded...
            <br/>
            {params.id}
        </div>
    )
}
