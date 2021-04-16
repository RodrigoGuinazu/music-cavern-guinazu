import React from 'react'
import './sidebar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Index() {  
    return (
        <div align='center' className="sidebar">
            <img src="images/music-cavern-logo.jpg" alt="logo"/>
            <h3 align="center" style={{fontFamily: 'Frijole', color: 'white', marginBottom: '30px'}}>The Music Cavern</h3>
            <ul align='left'>
                <li className="login">
                    Log In <ExitToAppIcon style={{fontSize: '30px', marginLeft: '10px', marginTop: '3px'}} />
                </li>
                <li>
                    Categorias
                </li>
                    <ul>
                        <li>
                            Guitarras
                        </li>
                        <li>
                            Bajos
                        </li>
                        <li>
                            Amplificadores
                        </li>
                        <li>
                            Accesorios
                        </li>
                        <li>
                            Equipo de Grabacion
                        </li>
                    </ul>
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
