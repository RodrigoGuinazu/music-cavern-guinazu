import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CategoriesContainer from './CategoriesContainer';
import productsList from '../../data/products'

export default function Index() {

    const [products, setProducts] = useState([])
    const { name } = useParams()

    useEffect(()=>{
        const showProudcts = new Promise((resolve, reject) => {
            resolve(productsList)
        })

        showProudcts.then((resolve) => {
            let filtrados = resolve.filter(pro => pro.category === name)
            setProducts(filtrados)
        }, (reject) => {
            console.log('rechazado', reject);
        })
        .catch((error)=>{
            console.log('hubo un error');
        })

    }, [name])

    return (
        <CategoriesContainer products={products} name={name} />
    )
}
