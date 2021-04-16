import React from 'react'
import './home.css'
import ProductBox from '../ProductBox'

export default function Index() {
    return (
        <div align="center" className="home">
            <div className="carousel">
                <br/>
                <br/>
                <h2>Carousel</h2>
                <br/>
                <br/>
            </div>

            <div align="center" className="latest">
                <h2>Ultimos Productos</h2>
                <ProductBox />
            </div>

            <div align="center" className="placeholder">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Body del Home</h1>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}
