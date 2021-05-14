import React, { useState } from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Categories from './Categories'
import Brands from './Brands'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function Index() {  

    const [categories, setCategories] = useState(false)

    const showCategories = () => setCategories(!categories)

    const [brands, setBrands] = useState(false)

    const showBrands = () => setBrands(!brands)

    return (
        <div align='center' className="sidebar">
            <img src="images/music-cavern-logo.jpg" alt="logo"/>
            <h3 align="center" style={{fontFamily: 'Frijole', color: 'white', marginBottom: '30px'}}>The Music Cavern</h3>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Log In <ExitToAppIcon style={{fontSize: '30px'}}/> </div>
            </li>
            <li onClick={showCategories} style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Categorias {!categories ? (<ArrowDropDownIcon style={{fontSize: '30px'}} />) : <ArrowDropUpIcon style={{fontSize: '30px'}} />} </div>
            </li>
                {categories && (
                    <Categories />
                )}
            <li onClick={showBrands} style={{cursor: 'pointer'}}>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Marcas {!brands ? (<ArrowDropDownIcon style={{fontSize: '30px'}} />) : <ArrowDropUpIcon style={{fontSize: '30px'}} />} </div>
            </li>
                {brands && (
                    <Brands />
                )}
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
