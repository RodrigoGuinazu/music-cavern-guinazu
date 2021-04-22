import React, { useState, useEffect } from 'react'
import './productBox.css'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StockCount from '../StockCount'

export default function Index({image, price, title, discount, newPrice, stock}) {

    const [unidades, setUnidades] = useState(1);

    const addStock = (incremet = 1) => {
		if (stock) setUnidades(unidades + incremet)
	}
	useEffect(() => {
		if (unidades < 1 && stock) setUnidades(1)
		if (unidades > stock) setUnidades(stock)
	}, [unidades, stock, setUnidades])

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
                <StockCount stock={stock} unidades={unidades} addStock={addStock}/>
            </div>                
        </article>
    )
}
