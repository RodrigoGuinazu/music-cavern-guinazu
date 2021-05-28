import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import app from '../../firebase';
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const Index = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            const notyf = new Notyf()
            notyf.success({
                message: `Registro Exitoso!`,
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
            <h2 className="login-title">Registro</h2>

            <form onSubmit={handleSignUp} className="login-credential">
                <div className="login-credential">
                    <input type="email" name="email" id="email" placeholder="E-mail"></input>
                </div>

                <div className="login-credential">
                    <input type="password" name="password" id="password" placeholder="Password"></input>
                </div>
                
                <button type="submit" className="login-submit-button">Registrate</button>
            </form>
            <br />
            <br />
            <br />
            <h3>Ya tenes un cuenta?</h3>
            <Link to={`/login`}><button className="register">Ir al Log In</button></Link>
        </section>
    )
}

export default withRouter(Index);