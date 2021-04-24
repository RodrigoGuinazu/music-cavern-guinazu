import React from 'react'

export default function index() {
    return (
        <div>
            <h1>Carrito</h1>
            <article>
                <h3>Medios de Pago: </h3>
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="cards" style={{width: '20%'}} alt="Visa" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="cards" style={{width: '20%'}} alt="Mastercard" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="cards" style={{width: '20%'}} alt="Amex" />
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className="cards" style={{width: '20%'}} alt="Mercadopago" />
                <p>
                *Válido solo para Tarjetas Bancarias.
                </p>
                <p>
                5% OFF en 12 Cuotas s/interés.
                </p>
                <p>
                10% OFF en 3 y 6 Cuotas s/interés.
                </p>
                <p>
                20% OFF en 1 Cuota.
                </p>
                <p>
                *El descuento se hace efectivo en el Checkout .
                </p>
            </article>
        </div>
    )
}
