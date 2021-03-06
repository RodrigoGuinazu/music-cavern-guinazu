import React, { useContext } from 'react';
import './cart.css';
import Recomended from '../Home/Recomended';
import { CartContext } from '../../context/CartContext'
import ProductsInCart from './ProductsInCart'
import CartTotal from './CartTotal'
import ProductsTitle from './ProductsTitle'

export default function Index() {

    const {cart} = useContext(CartContext)

    let totalAPagar = 0;

    cart.map(product => totalAPagar = totalAPagar + (product.item.price * product.quantity))

    return (
        <div align="center" className="carrito">
            <h2 className="cart-title">Carrito</h2>
            <br/>
            <div className="products-cart">
                <ProductsTitle />
                { cart.length > 0 ? (
                    [cart.map(product => <ProductsInCart key={product.item.id} title={product.item.title} price={product.item.price} image={product.item.image} id={product.item.id} quantity={product.quantity} />), <CartTotal totalAPagar={totalAPagar} />]
                ) : 
                    <h2 style={{marginTop: '50px', marginBottom: '50px'}} className="cart-title">Tu carrito esta vacio!</h2>
                }
            </div>
            
            <Recomended />
        </div>
    )
}
