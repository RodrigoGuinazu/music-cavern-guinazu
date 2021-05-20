import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandsContainer({ image, name, id }) {
    return (
        <Link className="brands-container" to={`/brands/${id}`}>
            <div>
                <img src={image} alt=""/>
            </div>
        </Link>
    )
}
