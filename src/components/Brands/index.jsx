import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import BrandsContainer from './BrandsContainer';
import productsList from '../../data/products'

export default function Index() {

    const [products, setProducts] = useState([])
    const { name } = useParams()

    useEffect(()=>{
        const showProudcts = new Promise((resolve, reject) => {
            resolve(productsList)
        })

        showProudcts.then((resolve) => {
            let filtrados = resolve.filter(pro => pro.brand === name)
            setProducts(filtrados)
        }, (reject) => {
            console.log('rechazado', reject);
        })
        .catch((error)=>{
            console.log('hubo un error');
        })

    }, [name]) // TENGO QUE REFRESCAR LA PAGINA PARA QUE MUESTRE LOS PRODUCTOS FILTRADOS POR LA MARCA

    return (
        <BrandsContainer products={products} name={name} />
    )
}
