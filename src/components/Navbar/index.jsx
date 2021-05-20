import React, { useState } from 'react'
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar/index';
import CartIcon from './CartIcon'

export default function Index() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <nav className={sidebar ? 'nav-menu' : 'nav-no-menu'}>
            <div className="nav">
                <MenuIcon onClick={showSidebar} style={{fontSize: '50px', cursor: 'pointer'}}/>
                <div className="logo-search">
                    <div className="logo-name">
                        <Link style={{color: 'white', textDecoration: 'none'}} to={'/'}><h3 align="center" style={{fontFamily: 'Frijole'}}>The Music Cavern</h3></Link>
                    </div>
                    <div className="search">
                        <form className="search" action="" method="GET">
                            <input type="text" name="search" className="searchTerm" placeholder="Busca tu Producto" />
                            <button type="submit" className="searchButton">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                    <br />
                </div>
                <CartIcon />
            </div>
            <Sidebar />
        </nav>
    )
}
