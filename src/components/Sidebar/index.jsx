import React, { useState } from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Categories from './Categories'
import Brands from './Brands'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export default function Index() {  

    const [categories, setCategories] = useState(false)

    const showCategories = () => setCategories(!categories)

    const [brands, setBrands] = useState(false)

    const showBrands = () => setBrands(!brands)

    return (
        <div align='center' className="sidebar">
            <h3 align="center" style={{fontFamily: 'Frijole', color: 'white', marginBottom: '30px'}}>The Music Cavern</h3>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Log In <ExitToAppIcon style={{fontSize: '30px'}}/> </div>
            </li>
            <li onClick={showCategories} style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Categorias {!categories ? (<ArrowRightIcon style={{fontSize: '30px'}} />) : <ArrowLeftIcon style={{fontSize: '30px'}} />} </div>
            </li>
                <Categories clase={categories ? 'categories-ul' : 'no-categories-ul'}/>
            <li onClick={showBrands} style={{cursor: 'pointer'}}>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Marcas {!brands ? (<ArrowRightIcon style={{fontSize: '30px'}} />) : <ArrowLeftIcon style={{fontSize: '30px'}} />} </div>
            </li>
                <Brands clase={brands ? 'brands-ul' : 'no-brands-ul'}/>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Luthiers</div>
            </li>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Sobre Nosotros</div>
            </li>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>FAQs</div>
            </li>
        </div>
    )
}
