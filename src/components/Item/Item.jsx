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
        <div class="row "> 
        <div class="col-sm-6">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">motos</p>
              <p class="card-text">${precio}</p>
              <div className="">
                    <button onClick={()=>remove()} className="btn col-xs-6 btn-dark botonMenos">-</button>
                    <span>Cantidad : {cantidad} </span>
                    <button onClick={()=>add()} className="btn col-xs-6 btn-dark botonMenos">+</button>
                  </div>
                  <div>
                    <button onClick={()=>addToCartWidget(cantidad)} className="btn btn-dark botonAgregar">Agregar al Carrito</button>
                  </div>
                  <div className="stock">
                    <p>Stock disponible: {stock}</p>
                  </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Item