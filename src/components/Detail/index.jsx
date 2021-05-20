import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetail from './ProductDetail';
import { getFirestore } from '../../firebase';
import Spinner from '../../Spinner'

export default function Detail() {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    const [brand, setBrand] = useState({})
    const [category, setCategory] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore();
        const itemCollection = db.collection('products'); // TODOS LOS PRODUCTOS
        const productoFiltrado = itemCollection.doc(id); // EL PRODUCTO QUE CORREPSONDE AL PARAMS
        const brandCollection = db.collection('brands'); // TODAS LAS MARCAS
        const categoryCollection = db.collection('categories'); // TODAS LAS CATEGORIAS

        productoFiltrado.get()
        .then((querySnapshot) => {
            let resultado = {
                ...querySnapshot.data(),
                brand: querySnapshot.data()['brand-id'].id,
                category: querySnapshot.data()['category-id'].id,
            }
            setProduct(resultado)

            const marcaFiltrada = brandCollection.doc(resultado.brand); // ID DE LA MARCA QUE CORRESPONDE
            marcaFiltrada.get()
            .then((querySnapshot) => {
                let marca = querySnapshot.data()
                setBrand(marca)
            })
            .catch((err) => console.log(err))

            const categoriaFiltrada = categoryCollection.doc(resultado.category); // ID DE LA CATEGORIA QUE CORRESPONDE 
            categoriaFiltrada.get()
            .then((querySnapshot) => {
                let categoria = querySnapshot.data()
                setCategory(categoria)
            })
            .catch((err) => console.log(err))
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            { loading ? ( <Spinner /> )
            :(
                <ProductDetail title={product.title} price={product.price} brand={brand.name} category={category.name} brandId={product.brand} categoryId={product.category} video={product.video} image={product.image} stock={product.stock} id={id}/>
            )}
        </>
    )
}