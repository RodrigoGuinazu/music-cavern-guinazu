import React, { useState, useEffect } from 'react';
import './categories.css';
import ProductBox from '../ProductBox';
import { getFirestore } from '../../firebase';

export default function CategoriesContainer({ products, name }) {

    const [categoria, setCategoria] = useState({})

    useEffect(() => {

        let isMounted = true; 
        const db = getFirestore();
        const categoriesCollection = db.collection('categories'); // TODAS LAS CATEGORIAS

        categoriesCollection.get()
        .then((querySnapshot) => {
            const categorias = querySnapshot.docs.map(doc => {
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data(), // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                }
            })
            let categoria = categorias.find(categoria => categoria.id === name)
            if (isMounted){
                setCategoria(categoria)
            }
        })
        return () => { isMounted = false };
    }, [name])

    return (
        <div align="center" className="categories-page">
            <h2 className="brands-h2">{categoria.name}</h2>
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={""} newPrice={null} stock={product.stock} id={product.id}/>)}
        </div>
    )
}
