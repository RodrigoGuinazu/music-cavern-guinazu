import React, { useState, useContext } from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Categories from './Categories'
import Brands from './Brands'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Link, withRouter } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Index = ({ history }) => {

    const {user} = useContext(UserContext)

    const [categories, setCategories] = useState(false)

    const showCategories = () => setCategories(!categories)

    const [brands, setBrands] = useState(false)

    const showBrands = () => setBrands(!brands)

    history.listen((location, action) => {
        setCategories(false)
        setBrands(false);
    });

    return (
        <div align='center' className="sidebar">
            <Link style={{color: 'white', textDecoration: 'none'}} to={'/'}><h3 align="center" style={{fontFamily: 'Frijole', color: 'white', marginBottom: '30px'}}>The Music Cavern</h3></Link>
            {user ? (
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/profile`}>
                    <li style={{cursor: 'pointer'}}>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>{user.email} <AccountCircleIcon style={{fontSize: '30px', marginLeft: '10px'}}/> </div>
                    </li>
                </Link>
            ): (
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/login`}>
                    <li style={{cursor: 'pointer'}}>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Log In <ExitToAppIcon style={{fontSize: '30px', marginLeft: '10px'}}/> </div>
                    </li>
                </Link>
            )}
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
            <li onClick={() => window.location = "#about-us"} style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>Sobre Nosotros</div>
            </li>
            <li style={{cursor: 'pointer'}}>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>FAQs</div>
            </li>
        </div>
    )
}

export default withRouter(Index);