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
                <h2 className="card-title">{item.nombre}</h2>
                </Link>

                <p className="descripcion">{item.descripcion}</p>
                    <ul className="info-grid">
                        <li>Precio:</li>
                        <li>${item.precio}</li>
                        <li>modelo:</li>
                        <li>{item.modelo}</li>
                    </ul>
                <ItemCount stock={item.stock} /> 
        </div>
    )
}

export default ItemDetail

