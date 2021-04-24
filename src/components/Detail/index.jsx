import React from 'react';
import './productDetail.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StockCount from '../StockCount';
import Recomended from '../Home/Recomended';

export default function index() {
    
    return (
        <div className="detail">
            <h2>Guitarras / Gibson</h2>
            <br/>
            <div className="product-detail">
                <img src="/images/products/preview_1.jpg" alt=""/>
                <article>
                    <br/>
                    <h3>Gibson</h3>
                    <br/>
                    <h1>Guitarra Gibson Les Paul 60's</h1>
                    <br/>
                    <h2>$ 350.000</h2>
                    <br/>
                    <span className="warranty-shippment-payment"><LocalShippingIcon style={{color: 'green'}}/><h3 href="/">Envios gratis desde $5.000</h3></span>
                    <span className="warranty-shippment-payment"><VerifiedUserIcon style={{color: 'goldenrod'}}/><h3 href="/">Garantia Oficial</h3></span>
                    <span className="warranty-shippment-payment"><CreditCardIcon style={{color: '#3483fa'}}/><h3 href="/">12 Cuotas Sin Interes</h3></span>
                    <StockCount clase={"stock-detail"} />
                    <br/>
                    <br/>
                </article>
            </div>
            <br/>
            <article align="center" className="description">
                <h2 className="description-title">Descripcion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem officiis nam repellat libero recusandae sunt eos tenetur possimus! Aspernatur neque eos harum quae ut, similique earum error ipsa et ducimus. Nostrum, illum temporibus corporis est, placeat minus ea aut neque pariatur ducimus perferendis beatae iusto incidunt expedita tempora quam rerum ratione atque voluptates dolorem? Tenetur, hic omnis ipsum itaque in iure eaque ipsam molestiae eligendi, iusto rem voluptate dolores ab amet odit, dolore expedita laudantium dignissimos. Saepe aspernatur eum est sunt veritatis nostrum earum velit unde asperiores autem quae quidem voluptas nam placeat eaque ex dolorem obcaecati odit consequatur, vitae doloremque ullam at. Quo perspiciatis nemo quia accusantium illo maxime nisi distinctio praesentium, doloremque porro sunt aliquid laboriosam, neque non fuga et. Magni, pariatur sed adipisci maiores ut dolore dignissimos, quibusdam voluptatibus aspernatur praesentium repellendus quae quidem doloribus sequi provident natus. Nisi explicabo, nihil provident at voluptates nulla voluptatum perferendis quam rem corporis dolore eaque illo earum pariatur exercitationem libero nemo deleniti. Nobis perferendis maiores a aliquid debitis magni eius tenetur, fugiat officiis, ipsum rerum ab libero doloribus sint vero repudiandae pariatur modi. Non officiis molestiae aspernatur corporis sunt est, recusandae odio, fuga ratione sapiente eveniet, numquam incidunt quae.</p>
                <iframe src="https://www.youtube.com/embed/CgPpVpbklGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </article>
            <Recomended />
        </div>
    )
}