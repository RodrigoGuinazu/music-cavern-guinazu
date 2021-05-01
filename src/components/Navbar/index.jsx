import React from 'react'
import './navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


export default function Index() {

    return (
        <nav>
            <div className="nav">
                <MenuIcon style={{fontSize: '50px'}}/>
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
                    <div className="navbar-categories">
                        <Link to={`/category/Guitarras`}>Guitarras</Link><span> - </span>
                        <Link to={`/category/Bajos`}>Bajos</Link><span> - </span>
                        <Link to={`/category/Teclados`}>Teclados</Link><span> - </span>
                        <Link to={`/category/Baterias`}>Baterias</Link>
                    </div>
                </div>
                <Link style={{color: 'white', textDecoration: 'none'}} to={'/cart'}><ShoppingCartIcon style={{fontSize: '50px'}}/></Link>
            </div>
        </nav>
    )
}
