import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../context/CartContext';

export default function ProductsInCart( {title, price, image, id, quantity} ) {

    const {removeItem} = useContext(CartContext)

        return (
            <>
                <div className="product-info-cart" key={id}>
                <div className="img-title-cart"><img src={image} alt=""/><a style={{ textDecoration: 'none' }} href={`/product/${id}`}>{title}</a></div>
                    <select className="stock-count-mobile" name="stock" id="">
                        <option selected value="1">1</option>
                        <option selected value="2">2</option>
                    </select>
                    <DeleteIcon onClick={ () => removeItem(id)} style={{color: 'crimson', width: '20%', fontSize: '35px', cursor: 'pointer'}}/>
                    <h3>${price}</h3>
                    <h3>{quantity}</h3>
                    <h3>${(price) * (quantity)}</h3>
                </div>
            </>
        )
}