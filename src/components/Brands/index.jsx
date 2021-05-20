import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import BrandsContainer from './BrandsContainer';
import { getFirestore } from '../../firebase';
import Spinner from '../../Spinner'

export default function Index() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const { name } = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection('products'); // TODOS LOS PRODUCTOS

        itemCollection.get()
        .then((querySnapshot) => {
            const array = querySnapshot.docs.map(doc => {
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data(), // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                    brand: doc.data()['brand-id'].id,
                    category: doc.data()['category-id'].id,
                }
            })
            
            const filtrados = array.filter(product => product.brand === name)
            setProducts(filtrados)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [name])

    return (
        <>
            { loading ? ( <Spinner /> ) : (<BrandsContainer products={products} name={name} />)}
        </ >
    )
}
