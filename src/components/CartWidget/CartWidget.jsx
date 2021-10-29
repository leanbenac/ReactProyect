import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useCartContext } from '../../Context/CartContext';

import "./CartWidget.css";



const CartWidget = () => {

    const {qBuy} = useCartContext();

    return(
        
        <div>
            <TiShoppingCart size={40}  color="white" className="carrito"/>
            <div className="qty-display">{qBuy}</div>
        </div>
        
        
    ); 
}

export default CartWidget

