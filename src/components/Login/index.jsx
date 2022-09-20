import React, { useCallback } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import app from '../../firebase';
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const Index = ({ history }) => {

    const handleSignIn = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            const notyf = new Notyf()
            notyf.success({
                message: `Logueado!`,
                duration: 2000,
            })
            history.push('/');
        }
        catch(error) {
            const notyf = new Notyf()
			notyf.error({
				message: error,
				duration: 6000,
			})
        }
    }, [history]) 

    return (
        <section align="center" className="login">
            <h2 className="login-title">Log In</h2>

            <form onSubmit={handleSignIn} className="login-credential">
                <div className="login-credential">
                    <input type="email" name="email" id="email" placeholder="E-mail"></input>
                </div>

                <div className="login-credential">
                    <input type="password" name="password" id="password" placeholder="Password"></input>
                </div>
                
                <button type="submit" className="login-submit-button">Ingresar</button>
            </form>
            <br />
            <br />
            <br />
            <h3>No estas registrado?</h3>
            <Link to={`/register`}><button className="register">Crear Cuenta</button></Link>
        </section>
    )
}

export default withRouter(Index);
