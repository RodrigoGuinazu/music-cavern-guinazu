import React, { useContext } from 'react'
import './stockCount.css'
import { CartContext } from '../../context/CartContext'

export default function Index({ product, stock, unidades, addStock, clase}) {

    const {addItem} = useContext(CartContext)

    return (
        <>
        <div className="complete-counter">
            <div className={clase}>
                <button disabled={(stock === 0) || unidades === 1} onClick={ () => addStock(-1)}>-</button>
                <div>{unidades}</div>
                <button disabled={stock === 0 || unidades === stock} onClick={ () => addStock(+1)}>+</button>
            </div>
            <button onClick={ () => addItem(product, unidades)} disabled={stock === 0} className={"add-to-cart"}>Agregar al Carrito</button>
        </div>
        </>
    )
}
