import React from 'react'
import './home.css'
import LatestProducts from './LatestProducts'
import Carousel from './Carousel'
import Body from './Body'
import Categories from './Categories'

export default function Index() {
    return (
        <div align="center" className="home">
            
            <Carousel />

            <div className="home-padding">
            <LatestProducts />
            <Categories />
            <Body />
            </div>
            
        </div>
    )
}
