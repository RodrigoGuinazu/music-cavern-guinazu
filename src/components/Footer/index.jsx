import React from 'react'
import './footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <footer>

            <h3 className="logo" align="center" style={{fontFamily: 'Frijole'}}>The Music Cavern</h3>

            <div className="redes">
                <h4>Redes</h4>
                <ul>
                    <li><a href="https://www.instagram.com/"><InstagramIcon /> Instagram</a></li>
                    <li><a href="https://www.twitter.com/"><TwitterIcon /> Twitter</a></li>
                    <li><a href="https://www.facebook.com/"><FacebookIcon /> Facebook</a></li>
                </ul>
            </div>

            <div className="payment-methods">
                <h4>Medios de Pago</h4>
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="cards" alt="Visa" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="cards" alt="Mastercard" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="cards" alt="Amex" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className="cards" alt="Mercadopago" />
            </div>

            <div className="shipment">
                <h4>Formas de Envío</h4>
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png" className="cards" alt="Oca" />
                <img src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/correo-argentino@2x.png" className="cards" alt="Corrde Arg" />
            </div>

            <div className="contacto">
                <h4>Contactanos</h4>
                <ul>
                    <li><Link to='/'><PhoneIcon /> 011-2530-0369</Link></li>
                    <li><Link to='/'><LocationOnIcon /> Calle Falsa 123</Link></li>
                    <li><Link to='/'><MailOutlineIcon /> sales@musicavern.com</Link></li>
                </ul>
            </div>

            <p className="copyright">Copyright © 2021 <span style={{fontFamily: 'Frijole'}}>The Music Cavern</span> S.R.L.</p>
        </footer>
    )
}
