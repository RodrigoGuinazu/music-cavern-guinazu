import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { getFirestore } from '../../firebase';
import Spinner from '../../Spinner'

export default function Categories() {

    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const categoriesCollection = db.collection('categories'); // TODOS LOS PRODUCTOS

        // TODOS LOS PRODUCTOS
        categoriesCollection.get()
        .then((querySnapshot) => {
            const array = querySnapshot.docs.map(doc => { // EL DOC CONTIENE EL id, metadata, y mas cosas, lo que nos importa es el ID y la data
                return{
                    id: doc.id, // AGREGO EL ID EN EL OBJETO DEL PRODUCTO
                    ...doc.data() // IMPORTANTE EL .data() (FUNCIONARIA COMO EL .JSON)
                }
            })
            setCategories(array)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div align="center" className="categories">
            <h2 align="left" className="latest-h2">Categorias</h2>
            { loading && ( <Spinner /> ) }
            {categories.map(category => <CategoryCard key={category.id} name={category.name} image={category.image} id={category.id} />)}
        </div>
    )
}
