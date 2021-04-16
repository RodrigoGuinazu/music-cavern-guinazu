import React from 'react'
import './productBox.css'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function Index() {
    return (
        <article className="product-box">
            <a href="/">
                <img src="/images/products/preview_1.jpg" alt="producto" />
            </a>
            <div className="product-info">
                <LocalShippingIcon style={{position: 'absolute', right: '10px', top: '-11px', color: 'green'}}/>
                <h2 align="left">$350.000</h2>
                <br/>
                <h3 align="left">Gibson Les Paul 60's</h3>
            </div>                
        </article>
    )
}
