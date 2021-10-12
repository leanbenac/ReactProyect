import React, { useState } from 'react';
import '../Item/Item.css';


const ItemCount = ({ remove , add , stock , addToCartWidget}) => {
const [cantidad , setCantidad] = useState(1)

// eslint-disable-next-line 
    function add() {
        if(cantidad <  stock) setCantidad(cantidad + 1)
    };
// eslint-disable-next-line 
    function remove() {
        if( cantidad > 1) setCantidad(cantidad - 1)
      };

      return (
        <>
        <div className="">
          <button onClick={()=>remove()} className="btn col-xs-6 btn-dark" >-</button>
            <span>Cantidad : {cantidad} </span>
          <button onClick={()=>add()} className="btn col-xs-6 btn-dark ">+</button>
        </div>
        <div>
          <button onClick={()=>addToCartWidget.setCantidad()} className="btn btn-dark botonAgregar">Agregar al Carrito</button>
        </div>
        <div className="stock pb-6">
          <p>Stock disponible: {stock}</p>
        </div>
        </>
      );
    };

export default ItemCount;

