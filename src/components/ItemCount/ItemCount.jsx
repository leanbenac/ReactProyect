import React, { useState } from 'react';
import '../Item/Item.css';


const ItemCount = ({ remove , add , stock }) => {
const [cantidad , setCantidad] = useState(1)

    // eslint-disable-next-line 
    function add() {
        if(cantidad <  stock) setCantidad(cantidad + 1)
    };
    // eslint-disable-next-line 
    function remove() {
        if( cantidad > 0) setCantidad(cantidad - 1)
      };

//evento show
const [show, setShow]=React.useState(true);

      return (
        
        <div>
          { show? 

          <>
          <div className="">
            <button onClick={()=>remove()} className="btn col-xs-6 btn-dark" >-</button>
              <span>Cantidad : {cantidad} </span>
            <button onClick={()=>add()} className="btn col-xs-6 btn-dark ">+</button>
          </div>

          <div>
              <button onClick={()=>setShow(false )} className="btn btn-dark botonAgregar">Agregar al Carrito</button>
              {/* <button onClick={()=>setShow(true )} className="btn btn-dark botonAgregar">Finalizar Compra</button> */}
          </div>

          <div className="stock pb-6">
            <p>Stock disponible: {stock}</p>
          </div>
          </>
          : <button onClick={()=>setShow(true && alert("Su compra fue exitosa! disfrute el viento en su cara!"))} className="btn btn-dark botonAgregar mb-5">Finalizar Compra</button>
          }
          
        </div>

      );
    };

export default ItemCount;

