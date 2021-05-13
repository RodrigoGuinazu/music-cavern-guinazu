import React, { useState, useEffect, useContext } from 'react';
import './productDetail.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StockCount from '../StockCount';
import Recomended from '../Home/Recomended';
import { Link } from 'react-router-dom'
import Opinion from './Opinion'
import { CartContext } from '../../context/CartContext';

export default function Index({ id, title, price, brand, category, video, image, stock }) {

    const {inCart} = useContext(CartContext)

    const [productInCart, setProductInCart] = useState(inCart(id))

    useEffect(() => {
		setProductInCart(inCart(id))
	}, [id, inCart])

    const [unidades, setUnidades] = useState(1);

    const addStock = (incremet = 1) => {
		if (stock) setUnidades(unidades + incremet)
	}
	useEffect(() => {
		if (unidades < 1 && stock) setUnidades(1)
		if (unidades > stock) setUnidades(stock)
	}, [unidades, stock, setUnidades])
    
    return (
        <div className="detail">
            <h2><Link style={{textDecoration: 'none', color: 'black'}} to={`/category/${category}`}>{category}</Link> / <Link style={{textDecoration: 'none', color: 'black'}} to={`/brands/${brand}`}>{brand}</Link></h2>
            <br/>
            <div className="product-detail">
                <div className="extra-images">
                    <img src="https://designshack.net/wp-content/uploads/placehold.jpg" alt=""/>
                    <img src="https://designshack.net/wp-content/uploads/placehold.jpg" alt=""/>
                    <img src="https://designshack.net/wp-content/uploads/placehold.jpg" alt=""/>
                </div>
                <img id="product-image" src={image} alt=""/>
                <article>
                    <br/>
                    <h3><Link style={{textDecoration: 'none', color: 'black'}} to={`/brands/${brand}`}>{brand}</Link></h3>
                    <br/>
                    <h1>{title}</h1>
                    <br/>
                    <h2 style={{fontSize: 'xx-large'}}>$ {price}</h2>
                    <br/>
                    <span className="warranty-shippment-payment"><LocalShippingIcon style={{color: 'green'}}/><h3 href="/">Envios gratis desde $5.000</h3></span>
                    <span className="warranty-shippment-payment"><VerifiedUserIcon style={{color: 'goldenrod'}}/><h3 href="/">Garantia Oficial</h3></span>
                    <span className="warranty-shippment-payment"><CreditCardIcon style={{color: '#3483fa'}}/><h3 href="/">12 Cuotas Sin Interes</h3></span>
                    { productInCart ? ( <Link to={`/cart`}><button className={"add-to-cart"}>Finalizar Compra</button></Link> ) : ( <StockCount product={{image, price, title, id, stock}} clase={"stock-detail"} stock={stock} unidades={unidades} addStock={addStock} /> ) }
                    <br/>
                    <br/>
                </article>
            </div>
            <br/>
            <article align="center" className="description">
                <h2 className="description-title">Descripcion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem officiis nam repellat libero recusandae sunt eos tenetur possimus! Aspernatur neque eos harum quae ut, similique earum error ipsa et ducimus. Nostrum, illum temporibus corporis est, placeat minus ea aut neque pariatur ducimus perferendis beatae iusto incidunt expedita tempora quam rerum ratione atque voluptates dolorem? Tenetur, hic omnis ipsum itaque in iure eaque ipsam molestiae eligendi, iusto rem voluptate dolores ab amet odit, dolore expedita laudantium dignissimos. Saepe aspernatur eum est sunt veritatis nostrum earum velit unde asperiores autem quae quidem voluptas nam placeat eaque ex dolorem obcaecati odit consequatur, vitae doloremque ullam at. Quo perspiciatis nemo quia accusantium illo maxime nisi distinctio praesentium, doloremque porro sunt aliquid laboriosam, neque non fuga et. Magni, pariatur sed adipisci maiores ut dolore dignissimos, quibusdam voluptatibus aspernatur praesentium repellendus quae quidem doloribus sequi provident natus. Nisi explicabo, nihil provident at voluptates nulla voluptatum perferendis quam rem corporis dolore eaque illo earum pariatur exercitationem libero nemo deleniti. Nobis perferendis maiores a aliquid debitis magni eius tenetur, fugiat officiis, ipsum rerum ab libero doloribus sint vero repudiandae pariatur modi. Non officiis molestiae aspernatur corporis sunt est, recusandae odio, fuga ratione sapiente eveniet, numquam incidunt quae.</p>
                <iframe src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </article>
            <section className="opiniones">
                <h2 align="center" className="description-title">Comentarios</h2>
                <Opinion />
                <Opinion />
                <Opinion />
            </section>
            <Recomended />
        </div>
    )
}