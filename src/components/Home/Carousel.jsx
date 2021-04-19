import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function Carousel() {
    return (
        <div className="carousel">
            <img src="/images/home_img.jpg" alt=""/>
            <div className="home-ventajas">
                <h3 href="/">Envios gratis desde $5.000</h3><span> <LocalShippingIcon /> </span>
                <h3 href="/">Garantia Oficial</h3><span> <VerifiedUserIcon /> </span>
                <h3 href="/">12 Cuotas Sin Interes</h3> <span> <CreditCardIcon /> </span>
            </div>
        </div>
    )
}
