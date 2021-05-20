import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({ clase }) {
    return (
        <>
            <ul className={clase}>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/H8uHRQ3n625rZt7QQ0oF`}><li>Accesorios </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/I74sHd1YE1SoZ3oJQc7C`}><li>Baterias </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/OvjRNEf6aV27eO3cBvOu`}><li>Amplificadores </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/WogjsnwjZn7LlKJWDWag`}><li>Grabacion </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/cBbVZERk9kF21DG5us9Z`}><li>Guitarras </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/gW9c56JbgfMKHLbW2wZH`}><li>Bajos </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/yyxCX0q6kDLTlVJndjoF`}><li>Teclados </li></Link>
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/zhUz6zQd24dbqiIJ3Kal`}><li>Pedales </li></Link>
            </ul>
        </>
    )
}