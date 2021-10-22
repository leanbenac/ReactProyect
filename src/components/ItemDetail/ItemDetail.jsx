//componente presentaciontal
import  {useState} from 'react';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import moto1 from '../../img/moto1.jpg';
import { Link } from 'react-router-dom';


import { useCartContext } from '../../Context/CartContext'


const ItemDetail = ({ item }) => {
    
    const {cartList, addItem} = useCartContext ();
    console.log(cartList);

    const [show, setShow] = useState (false);

    const [hide, setHide] = useState (true);

    const onAdd =(qty)=>{
        addItem({item: item, cantidad: qty})
        alert(`Agregaste al carrito ${qty} moto/s ${item.nombre}`);
        setShow(true);
        setHide(false);
    }

    return (
        
        
        <div className="card mt-5 mb-5">
            <img src={moto1} class="card-img-top" alt="..."/>
                
                <h2 >{item.nombre}</h2>

                <ul className="info-grid">
                    <li>Modelo<br></br>  {item.modelo}</li>
                        
                    <li>Precio ${item.precio}</li>                       
                </ul>
                    <p className="descripcion">{item.descripcion}</p>
                {hide ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>:null}

                {show ? <Link to={'/cart'}><button className="btn btn-dark botonAgregar mb-5">Finalizar Compra</button></Link>:null}

                
        </div>
    )
}

export default ItemDetail;

