import React, { useState } from 'react'
import './navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../Sidebar';


export default function Index() {

    return (
        <nav>
            <div className="nav">
                <MenuIcon style={{fontSize: '50px'}}/>
                <div className="logo-search">
                    <div className="logo-name">
                        <h3 align="center" style={{fontFamily: 'Frijole'}}>The Music Cavern</h3>
                    </div>
                    <div className="search">
                        <form className="search" action="" method="GET">
                            <input type="text" name="search" className="searchTerm" placeholder="Busca tu Producto" />
                            <button type="submit" className="searchButton">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                    <div class="navbar-categories">
                        <a href="/">Guitarras</a><span> - </span>
                        <a href="/">Bajos</a><span> - </span>
                        <a href="/">Amplificadores</a><span> - </span>
                        <a href="/">Equipo de Grabacion</a><span> - </span>
                        <a href="/">Accesorios</a>
                    </div>
                </div>
                <ShoppingCartIcon style={{fontSize: '50px'}}/>
            </div>
        </nav>
    )
}
