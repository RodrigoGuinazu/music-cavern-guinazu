import React, { useState } from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Categories from './Categories'
import Brands from './Brands'

export default function Index() {  

    const [categories, setCategories] = useState(false)

    const showCategories = () => setCategories(!categories)

    const [brands, setBrands] = useState(false)

    const showBrands = () => setBrands(!brands)

    return (
        <div align='center' className="sidebar">
            <img src="images/music-cavern-logo.jpg" alt="logo"/>
            <h3 align="center" style={{fontFamily: 'Frijole', color: 'white', marginBottom: '30px'}}>The Music Cavern</h3>
            <ul align='left'>
                <li className="login">
                    Log In <ExitToAppIcon style={{fontSize: '30px', marginLeft: '10px', marginTop: '3px'}} />
                </li>
                <li onClick={showCategories} style={{cursor: 'pointer'}}>
                    Categorias
                </li>
                    {categories && (
                        <Categories />
                    )}
                <li onClick={showBrands} style={{cursor: 'pointer'}}>
                    Marcas
                </li>
                    {brands && (
                        <Brands />
                    )}
                <li>
                    Luthiers
                </li>
                <li>
                    Sobre Nosotros
                </li>
                <li>
                    FAQs
                </li>
            </ul>
        </div>
    )
}
