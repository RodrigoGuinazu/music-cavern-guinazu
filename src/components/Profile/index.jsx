import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import app from '../../firebase';
import { getFirestore } from '../../firebase';
import { withRouter } from 'react-router'
import Spinner from '../../Spinner'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const Index = ({ history }) => {

    const {user} = useContext(UserContext)

    const logOut = () => {
        app.auth().signOut()
        const notyf = new Notyf()
        notyf.error({
            message: `Cerraste Sesion`,
            duration: 3000,
        })
        history.push('/');
    }

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const ordersCollection = db.collection('orders');
        const orders = ordersCollection.where('user', '==', user.email)

        orders.get()
        .then((querySnapshot) => {
            const array = querySnapshot.docs.map(doc => {
                return{
                    id: doc.id
                }
            })
            setOrders(array)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [user.email])

    return (
        <section align="center" className="login">
            <h2 className="login-title">Bienvenido a The Music Cavern!</h2>
            <div className="login-credential-image">
                <img src="https://nuk.chultane5000.pw/img/627255.png" alt="avatar-login" />
            </div>

            <form className="login-credential">
                <div className="login-credential">
                    <br />
                    <label className="login-title" htmlFor="">Usuario:</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder={user.email} disabled></input>
                    <br />
                    <br />
                    <label className="login-title" htmlFor="">Tus Compras</label>
                    <br />
                    { loading && ( <Spinner /> ) }
                    {orders.length === 0 ? (
                        <>
                        <br />
                        <h2>Aun no has hecho ninguna compra</h2>
                        <SentimentVeryDissatisfiedIcon style={{fontSize: '50px'}}/>
                        <br />
                        </>
                    ) : (
                        <ul>
                            <br />
                                {orders.map(order => <li key={order.id} style={{listStyle: 'none'}}>{order.id}</li>)}
                            <br />
                         </ul>
                    )}
                </div>
                
                <button onClick={() => logOut()} className="logout-submit-button">Log Out</button>
            </form>
        </section>
    )
}

export default withRouter(Index);