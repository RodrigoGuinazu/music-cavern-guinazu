import React from 'react'
import { Link } from 'react-router-dom'

export default function Brands() {
    return (
        <ul>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Jackson`}><li>Jackson </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Yamaha`}><li>Yamaha </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Fender`}><li>Fender </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Behringer`}><li>Behringer </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Blackstar`}><li>Blackstar </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Squier`}><li>Squier </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Zildijan`}><li>Zildijan </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Stagg`}><li>Stagg </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Marshall`}><li>Marshall </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Remo`}><li>Remo </li></Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/brands/Gibson`}><li>Gibson </li></Link>
        </ul>
    )
}
