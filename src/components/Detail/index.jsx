import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetail from './ProductDetail';
import productsList from '../../data/products';

export default function Detail() {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const showProudct = new Promise((resolve, reject) => {
            resolve(productsList)
        })

        showProudct.then((resolve) => {
            let filtrado = resolve.find(pro => String(pro.id) === id)
            setProduct(filtrado)
        }, (reject) => {
            console.log('rechazado', reject);
        })
        .catch((error)=>{
            console.log('hubo un error');
        })

    }, [id])
	

    return (
        <>
            <ProductDetail title={product.title} price={product.price} brand={product.brand} category={product.category} video={product.video} image={product.image} stock={product.stock} id={product.id}/>
        </>
    )
}