import React, { useState, useEffect } from 'react';
import ProductBox from '../ProductBox';
import './brands.css'
import { getFirestore } from '../../firebase';

export default function BrandsContainer({products, name}) {

    const [marca, setMarca] = useState({})

    useEffect(() => {

        const db = getFirestore();
        const brandsCollection = db.collection('brands'); // TODAS LAS MARCAS

        brandsCollection.get()
        .then((querySnapshot) => {
            const marcas = querySnapshot.docs.map(doc => {
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data(), // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                }
            })
            let marca = marcas.find(marca => marca.id === name)
            setMarca(marca)
        })
    }, [name])

    return (
        <div align="center" className="brands-page">
            <h2 align="center" className="brands-h2">{marca.name}</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={""} newPrice={null} stock={product.stock} id={product.id}/>)}
        </div>
    )
}
