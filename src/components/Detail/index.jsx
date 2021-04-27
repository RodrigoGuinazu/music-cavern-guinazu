import React from 'react';
import './productDetail.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StockCount from '../StockCount';
import Recomended from '../Home/Recomended';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

export default function index() {
    
    return (
        <div className="detail">
            <h2>Guitarras / Gibson</h2>
            <br/>
            <div className="product-detail">
                <div className="extra-images">
                    <img src="https://static.gibson.com/product-images/USA/USA1R6524/Unburst/hardware-500_500.png " alt=""/>
                    <img src="https://res.cloudinary.com/reverb/image/upload/t_facebook_meta/knwf0vlaww4iopqckzns.jpg" alt=""/>
                    <img src="https://static.gibson.com/product-images/USA/USA1R6524/Iced%20Tea/back-neck-500_500.png" alt=""/>
                </div>
                <img id="product-image" src="/images/products/preview_1.jpg" alt=""/>
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
            <section class="opiniones">
                <h2 align="center" className="description-title">Comentarios</h2>
                <div class="opinion">
                    <h3>Lorem, ipsum dolor.</h3>
                    <div class="puntuacion-opiniones">
                        <StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, doloribus delectus quod illum quisquam accusamus neque dolor? Quas, dolore numquam.</p>
                    <div class="like-dislike"><ThumbUpAltIcon style={{marginRight: '25px'}}/><ThumbDownAltIcon /></div>
                </div>

                <div class="opinion">
                    <h3>Lorem, ipsum</h3>
                    <div class="puntuacion-opiniones">
                        <StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ea accusamus in distinctio voluptate aspernatur obcaecati voluptatum dolorum rerum, consectetur dolore veritatis tempora eaque explicabo odio possimus, repudiandae ullam similique.</p>
                    <div class="like-dislike"><ThumbUpAltIcon style={{marginRight: '25px'}}/><ThumbDownAltIcon /></div>
                </div>

                <div class="opinion">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <div class="puntuacion-opiniones">
                        <StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti!.</p>
                    <div class="like-dislike"><ThumbUpAltIcon style={{marginRight: '25px'}}/><ThumbDownAltIcon /></div>
                </div>
            </section>
            <Recomended />
        </div>
    )
}