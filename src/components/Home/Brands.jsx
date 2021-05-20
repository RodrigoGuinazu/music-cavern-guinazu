import React, { useState, useEffect } from 'react'
import BrandsContainer from './BrandsContainer'
import { getFirestore } from '../../firebase';
import Spinner from '../../Spinner'

export default function Brands() {

    const [loading, setLoading] = useState(false)
    const [brands, setBrands] = useState([])

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const brandsCollection = db.collection('brands'); // TODOS LOS PRODUCTOS

        // TODOS LOS PRODUCTOS
        brandsCollection.get()
        .then((querySnapshot) => {
            const array = querySnapshot.docs.map(doc => { // EL DOC CONTIENE EL id, metadata, y mas cosas, lo que nos importa es el ID y la data
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data() // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                }
            })
            setBrands(array)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div className="brands">
            <h2 align="left">Nuestras Marcas</h2>
            { loading && ( <Spinner /> ) }
            {brands.map(brand => <BrandsContainer key={brand.id} name={brand.name} image={brand.image} id={brand.id} />)}
        </div>
    )
}
