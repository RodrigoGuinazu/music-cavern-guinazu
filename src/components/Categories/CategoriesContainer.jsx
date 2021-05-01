import React from 'react';
import './categories.css';
import ProductBox from '../ProductBox';

export default function CategoriesContainer({ products, name }) {
    return (
        <div align="center" className="categories-page">
            <h2 className="brands-h2">{name}</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={""} newPrice={null} stock={product.stock} id={product.id}/>)}
        </div>
    )
}
