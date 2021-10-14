//componente presentaciontal

import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import moto1 from '../../img/moto1.jpg';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item,id }) => {
    
    return (
        
        <div className="card mt-5 ">
            <img src={moto1} class="card-img-top" alt="..."/>

                <Link to={`/productos/${id}`}>
                <h2 >{item.nombre}</h2>
                </Link>
                
                <ul className="info-grid">

                    <li>Modelo<br></br>  {item.modelo}</li>
                        
                    <li>Precio ${item.precio}</li>
                        
                </ul>

                    <p className="descripcion">{item.descripcion}</p>
                <ItemCount stock={item.stock} /> 
        </div>
    )
}

export default ItemDetail

