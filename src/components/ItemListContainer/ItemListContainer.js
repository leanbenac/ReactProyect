import React from 'react'
import "./ItemListContainer.css"


//props

export default function ItemListContainer( {ProxProductos} ) {
    return (
        <>
            <h1 className="productos"> {ProxProductos} </h1>
        </>
    )
}

