import React from 'react'
import './stockCount.css'

export default function index({ stock, unidades, addStock, clase}) {
    return (
        <>
        <div className="complete-counter">
            <div className={clase}>
                <button disabled={(stock === 0) || unidades === 1} onClick={ () => addStock(-1)}>-</button>
                <div>{unidades}</div>
                <button disabled={stock === 0 || unidades === stock} onClick={ () => addStock(+1)}>+</button>
            </div>
            <button disabled={stock === 0} className={"add-to-cart"}>Agregar al Carrito</button>
        </div>
        </>
    )
}
