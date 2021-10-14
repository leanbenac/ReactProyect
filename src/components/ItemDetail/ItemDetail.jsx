//componente presentaciontal
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import moto1 from '../../img/moto1.jpg';


const ItemDetail = ({ item }) => {
    
    return (
        
        <div className="card mt-5 mb-5">
            <img src={moto1} class="card-img-top" alt="..."/>

                
                <h2 >{item.nombre}</h2>
                
                
                <ul className="info-grid">

                    <li>Modelo<br></br>  {item.modelo}</li>
                        
                    <li>Precio ${item.precio}</li>
                        
                </ul>

                    <p className="descripcion">{item.descripcion}</p>
                <ItemCount stock={item.stock} initial={1}/> 
        </div>
    )
}

export default ItemDetail;

