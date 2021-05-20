import React, { useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CustomizedBadges() {

    const {cart} = useContext(CartContext)
    let cantidadCarrito = 0;
    cart.map(product => cantidadCarrito = cantidadCarrito + product.quantity) // UNIDADES EN EL CARRITO

  return (
    <Link style={{color: 'white', textDecoration: 'none'}} to={'/cart'}>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={cantidadCarrito} color="secondary">
            <ShoppingCartIcon style={{fontSize: '50px', color: 'white'}} />
        </StyledBadge>
        </IconButton>
    </Link>
  );
}