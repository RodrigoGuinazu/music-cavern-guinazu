import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ name, image, id }) {
    return (
        <div className="category-div">
            <Link to={`/category/${id}`} >
                <article className='category-card'>
                    <img src={image} alt=""/>
                </article>
            </Link>
            <br/>
            <h3 align='center'>{name}</h3>
        </div>
    )
}
