import React, { useState, useEffect } from 'react'
import ProductBox from '../ProductBox'
import productsList from '../../data/products'

export default function Offers() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const showProudcts = new Promise((resolve, reject) => {
            resolve(productsList)
        })

        showProudcts.then((resolve) => {
            let hotsale = resolve.filter(pro => pro.discount)
            console.log(hotsale)
            setProducts(hotsale)
        }, (reject) => {
            console.log('rechazado', reject);
        })
        .catch((error)=>{
            console.log('hubo un error');
        })

    }, [])

    return (
        <div align="center" className="latest">
            <h2 align="left" className="latest-h2">Hot Sale</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={"product-info-discount"} newPrice={'$' + product.discount} stock={product.stock} id={product.id}/>)}
        </div>
    )
}