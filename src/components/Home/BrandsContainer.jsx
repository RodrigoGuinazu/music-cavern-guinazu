import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandsContainer({image, name}) {
    return (
        <Link className="brands-container" to={`/brands/${name}`}>
            <div>
                <img src={image} alt=""/>
            </div>
        </Link>
    )
}
