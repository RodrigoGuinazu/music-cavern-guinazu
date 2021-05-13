import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <>
            <ul>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Guitarras`}><li>Guitarras </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Bajos`}><li>Bajos </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Amplificadores`}><li>Amplificadores </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Pedales`}><li>Pedales </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Grabacion`}><li>Grabacion </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Teclados`}><li>Teclados </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Baterias`}><li>Baterias </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/Accesorios`}><li>Accesorios </li></Link>
            </ul>
        </>
    )
}