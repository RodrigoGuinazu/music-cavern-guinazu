import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase';
import '../../firebase'
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

    
    async function createOrder(){
        const db = getFirestore();
        const itemsToUpdate = db.collection('products').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id));
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        setLoading(true)
        const outOfStock = [];
        const orders = db.collection('orders');

        const newOrder = {
            user: user ? user.email : "",
            items: purchased,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'Orden En Proceso!',
            total: totalAPagar
        }

        query.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= cart[idx].quantity){
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].quantity});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id});
            }
        })
        
        if(outOfStock.length === 0){ 
            await batch.commit();
            try {
                const { id } = await orders.add(newOrder);
                swal(`Gracias por tu compra!`, `Tu id de compra: ${id}`, "success");
                clearCart()
                setLoading(false)
            }catch (err) {
                console.log(err);
            }
        }
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
                    <button onClick={ () => createOrder()} className="purchase">{ loading ? ( <Spinner /> ) : ("Finalizar Compra") }</button>
                )}
                
                <button onClick={ () => clearCart()} className="clean-cart">Vaciar Carrito</button>
            </article>
        </div>
    )
}