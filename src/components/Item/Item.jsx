import React, { useState } from 'react';
import '../Item/Item.css';

const Item = ({nombre , stock , precio , img , addToCartWidget}) => {

    const [cantidad , setCantidad] = useState(0)

    function add() {
        if(cantidad <  stock) setCantidad(cantidad + 1)
      }

    function remove() {
        if( cantidad > 0) setCantidad(cantidad - 1)
      }
      
      

    return (

        <div className="card mt-3">
                <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                  <h5 className="card-title">{nombre}</h5>
                  <p className="card-text">Sport Motorcycle</p>
                  <p className="card-text">${precio}</p>
              <div className="">
                <button onClick={()=>remove()} className="btn col-xs-6 btn-dark">-</button>
                  <span>Cantidad : {cantidad} </span>
                <button onClick={()=>add()} className="btn col-xs-6 btn-dark ">+</button>
              </div>
              <div>
                <button onClick={()=>addToCartWidget.setCantidad()} className="btn btn-dark botonAgregar">Agregar al Carrito</button>
              </div>
              <div className="stock">
                <p>Stock disponible: {stock}</p>
              </div>
            </div>
          </div>

  )
}

export default Item