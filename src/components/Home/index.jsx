import React from 'react'
import './home.css'
import LatestProducts from './LatestProducts'
import Carousel from './Carousel'
import Categories from './Categories'
import Brands from './Brands'
import Offers from './Offers'

export default function Index() {
    return (
        <div align="center" className="home">
            
            <Carousel />

            <div className="home-padding">
            <LatestProducts />
            <Categories />
            <Brands />
            <Offers />
            </div>
            
        </div>
    )
}
