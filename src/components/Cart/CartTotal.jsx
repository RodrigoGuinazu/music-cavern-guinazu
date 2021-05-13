import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartTotal() {

    const {clearCart, cart} = useContext(CartContext)

    let totalAPagar = 0;

    cart.map(product => totalAPagar = totalAPagar + (product.item.price * product.quantity))

    return (
        <div className="cart-total">
            <article align="left" className="payment-methods-cart">
                <h3>Medios de Pago</h3>
                <br/>
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="cards" alt="Visa" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="cards" alt="Mastercard" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="cards" alt="Amex" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className="cards" alt="Mercadopago" />
                <br/>
                <br/>
                <p>5% OFF en 12 Cuotas s/interés</p>
                <p>10% OFF en 3 y 6 Cuotas s/interés</p>
                <p>20% OFF en 1 Pago</p>
            </article>
            <article align="left" className="total">
                <h3>Subtotal: $ {totalAPagar}</h3>
                <h3>Envio: $ 0</h3>
                <h3>Total: $ {totalAPagar}</h3>
                <button className="purchase">Finalizar Compra</button>
                <button onClick={ () => clearCart()} className="clean-cart">Limpiar Carrito</button>
            </article>
        </div>
    )
}
