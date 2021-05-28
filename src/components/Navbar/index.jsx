import React, { useState } from 'react'
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from "react-router-dom";
import Sidebar from '../Sidebar/index';
import CartIcon from './CartIcon'

const Index = ({ history }) => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    history.listen((location, action) => {
        setSidebar(false)
    });

    //const [search, setSearch] = useState(null); onChange={e => setSearch(e.target.value)} (input search); Toma lo que se escriba en el search

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
                            <input type="text" name="searchTerm" className="searchTerm" placeholder="Busca tu Producto" />
                            <button type="submit" className="searchButton" disabled>
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

export default withRouter(Index);