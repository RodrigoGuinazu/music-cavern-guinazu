import React from 'react'

export default function CategoryCard({category, image}) {
    return (
        <div className="category-div">
            <article className='category-card'>
                <img src={image} alt=""/>
            </article>
            <br/>
            <h3 align='center'>{category}</h3>
        </div>
    )
}
