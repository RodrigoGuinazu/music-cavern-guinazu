import React from 'react'
import './productBox.css'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function Index({image, price, title, discount, newPrice}) {
    return (
        <article className="product-box">
            <a href="/">
                <img src={image} alt="producto" />
            </a>
            <div className="product-info">
                <LocalShippingIcon style={{position: 'absolute', right: '10px', top: '-11px', color: 'green'}}/>
                <h2 className={discount} align="left">${price}</h2><span><h3 className="new-price" >{newPrice}</h3></span>
                <br/>
                <h3 align="left">{title}</h3>
            </div>                
        </article>
    )
}
