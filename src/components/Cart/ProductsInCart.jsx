import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductsInCart( {title, price, image, id, quantity} ) {

    const {removeItem} = useContext(CartContext)

        return (
            <>
                <div className="product-info-cart" key={id}>
                <div className="img-title-cart"><img src={image} alt=""/><Link to={`/product/${id}`}>{title}</Link></div>
                    <div className="stock-count-mobile" id="">
                        {quantity}
                    </div>
                    <DeleteIcon onClick={ () => removeItem(id)} style={{color: 'crimson', width: '20%', fontSize: '35px', cursor: 'pointer'}}/>
                    <h3>${price}</h3>
                    <h3>{quantity}</h3>
                    <h3>${(price) * (quantity)}</h3>
                </div>
            </>
        )
}