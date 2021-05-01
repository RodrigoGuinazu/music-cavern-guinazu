import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({category, image}) {
    return (
        <div className="category-div">
            <Link to={`/category/${category}`} >
                <article className='category-card'>
                    <img src={image} alt=""/>
                </article>
            </Link>
            <br/>
            <h3 align='center'>{category}</h3>
        </div>
    )
}
