import React from 'react'
import ProductBox from '../ProductBox';
import './brands.css'


export default function BrandsContainer({products, name}) {
    return (
        <div align="center" className="brands-page">
            <h2 align="center" className="brands-h2">{name}</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={""} newPrice={null} stock={product.stock} id={product.id}/>)}
        </div>
    )
}
