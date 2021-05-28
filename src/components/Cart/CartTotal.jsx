import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app'
import swal from 'sweetalert';
import Spinner from '../../Spinner'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

export default function CartTotal({ totalAPagar }) {

    const {user} = useContext(UserContext)

    const {cart, clearCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const purchased = cart.map(product => ({
        id: product.item.id,
        title: product.item.title,
        price: product.item.price,
        quantity: product.quantity
    }))

    const newOrder = {
        user: user ? user.email : "",
        items: purchased,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        price: totalAPagar
    }
    
    function CreateOrder() {
        const db = getFirestore();
        const orders = db.collection("orders");

        setLoading(true)
    
        orders.add(newOrder)
        .then(({ id }) => {
            swal(`Gracias por tu compra!`, `Tu id de compra: ${id}`, "success");
            clearCart()
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoading(false))
    }

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
                {!user ? (
                    <Link to={`/login`}><button className="purchase">Iniciar Sesion</button></Link>
                ) : (
                    <button onClick={ () => CreateOrder()} className="purchase">{ loading ? ( <Spinner /> ) : ("Finalizar Compra") }</button>
                )}
                
                <button onClick={ () => clearCart()} className="clean-cart">Limpiar Carrito</button>
            </article>
        </div>
    )
}
