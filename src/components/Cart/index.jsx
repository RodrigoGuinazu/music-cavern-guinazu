import React from 'react';
import './cart.css';
import StockCount from '../StockCount';
import Recomended from '../Home/Recomended';
import DeleteIcon from '@material-ui/icons/Delete';

export default function index() {
    return (
        <div align="center" className="carrito">
            <h2 className="cart-title">Tu Carrito</h2>
            <br/>
            <div className="products-cart">
                <div className="cart-titles">
                    <h3>Producto</h3>
                    <h3></h3>
                    <h3>Precio</h3>
                    <h3>Cantidad</h3>
                    <h3>Total</h3>
                </div>
                <div className="product-info-cart">
                    <div className="img-title-cart"><img src="/images/products/preview_1.jpg" alt=""/><h4>Guitarra Gibson Les Paul 60's</h4></div>
                    <select className="stock-count-mobile" name="stock" id="">
                        <option selected value="1">1</option>
                        <option selected value="2">2</option>
                    </select>
                    <DeleteIcon style={{color: 'crimson', width: '20%'}}/>
                    <h3>$ 350.000</h3>
                    <div className="stock-counter-cart"><StockCount clase={"stock-cart"} /></div>
                    <h3>$ 350.000</h3>
                </div>
                <div className="product-info-cart">
                    <div className="img-title-cart"><img src="/images/products/preview_1.jpg" alt=""/><h4>Guitarra Gibson Les Paul 60's</h4></div>
                    <select className="stock-count-mobile" name="stock" id="">
                        <option selected value="1">1</option>
                        <option selected value="2">2</option>
                    </select>
                    <DeleteIcon style={{color: 'crimson', width: '20%'}}/>
                    <h3>$ 350.000</h3>
                    <div className="stock-counter-cart"><StockCount clase={"stock-cart"} /></div>
                    <h3>$ 350.000</h3>
                </div>
                <div className="product-info-cart">
                    <div className="img-title-cart"><img src="/images/products/preview_1.jpg" alt=""/><h4>Guitarra Gibson Les Paul 60's</h4></div>
                    <select className="stock-count-mobile" name="stock" id="">
                        <option selected value="1">1</option>
                        <option selected value="2">2</option>
                    </select>
                    <DeleteIcon style={{color: 'crimson', width: '20%'}}/>
                    <h3>$ 350.000</h3>
                    <div className="stock-counter-cart"><StockCount clase={"stock-cart"} /></div>
                    <h3>$ 350.000</h3>
                </div>
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
                        <h3>Subtotal: $ 350.000</h3>
                        <h3>Envio: $ 0</h3>
                        <h3>Total: $ 350.000</h3>
                        <button className="purchase">Finalizar Compra</button>
                    </article>
                </div>
            </div>
            
            <Recomended />
        </div>
    )
}
