import React, { useState, useEffect } from 'react'
import ProductBox from '../ProductBox'

export default function LatestProducts() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const showProudcts = new Promise((resolve, reject) => {
            let products = [
                {
                    id: 1,
                    title: "Guitarra Gibson Les Paul 60's",
                    price: 350000,
                    stock: 2,
                    image: "/images/products/preview_1.jpg"
                },
                {
                    id: 2,
                    title: "Bajo Squier Classic Vibe 70's",
                    price: 85000,
                    stock: 3,
                    image: "/images/products/bajo_squier.jpg"
                },
                {
                    id: 3,
                    title: "Amplificador Fender Champion 100",
                    price: 70000,
                    stock: 0,
                    image: "/images/products/ampli_fender.jpg"
                },
                {
                    id: 4,
                    title: "Interfaz de Audio Focusrite 2i2",
                    price: 25000,
                    stock: 11,
                    image: "/images/products/focusrite.png"
                },
            ]
    
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        })

        showProudcts.then((resolve) => {
            setProducts(resolve)
        }, (reject) => {
            console.log('rechazado', reject);
        })
        .catch((error)=>{
            console.log('hubo un error');
        })

    }, [])

    return (
        <div align="center" className="latest">
            <h2 align="left" className="latest-h2">Ultimos Ingresos</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={""} newPrice={null} stock={product.stock}/>)}
        </div>
    )
}