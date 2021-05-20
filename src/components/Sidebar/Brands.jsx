import React from 'react'
import { Link } from 'react-router-dom'

export default function Brands({ clase }) {
    return (
        <ul className={clase}>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/kqSdXaIhLBiTFDI3PTnm`}><li>Gibson </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/JUSXeMnj0SekoduCRKdw`}><li>Fender </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Ectp5d3lVcz0ZFG3DXt5`}><li>Squier </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/CquMiJaXIVG7RHlRl1ki`}><li>Behringer </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/qjUrBKD7aXQ8zwRQYO1H`}><li>Jackson </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/npXVbFiORqDuKfPtvhFg`}><li>Marshall </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/XeRurQ4g0QbDV0Lp5UmR`}><li>Blackstar </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/TP3IfdAdsKqD4xwNNlze`}><li>Yamaha </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/wcnNBnqPsnANXCjGXMtt`}><li>Remo </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/CW6215hZwaXO9Bctpduf`}><li>Zildijan </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/LmOtt9DgipUMX556So9q`}><li>Stagg </li></Link>
        </ul>
    )
}