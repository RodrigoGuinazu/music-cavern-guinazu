import React, { useState, useEffect } from 'react'
import ProductBox from '../ProductBox'
import { getFirestore } from '../../firebase';
import Spinner from '../../Spinner'

export default function Offers() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection('products'); // TODOS LOS PRODUCTOS
        const offers = itemCollection.where('discount', '>', 0).limit(4)

        // TODOS LOS PRODUCTOS
        offers.get()
        .then((querySnapshot) => {
            const array = querySnapshot.docs.map(doc => { // EL DOC CONTIENE EL id, metadata, y mas cosas, lo que nos importa es el ID y la data
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data() // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                }
            })
            setProducts(array)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div align="center" className="latest">
            <h2 align="left" className="latest-h2">Hot Sale</h2>
            { loading && ( <Spinner /> ) }
            {products.map(product => <ProductBox key={product.id} image={product.image} price={product.price} title={product.title} discount={"product-info-discount"} newPrice={'$' + product.discount} stock={product.stock} id={product.id}/>)}
        </div>
    )
}