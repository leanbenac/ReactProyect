//componente presentaciontal
import  {useState} from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import moto1 from '../../img/moto1.jpg';

import './ItemDetail.css'

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
        
        <div className="container">
            <div className="row">
                <div className="card mt-5 mb-5 col-md-6">
                        <img src={moto1} class="card-img-top" alt="..."/>
                        
                        <h2 >{item.nombre}</h2>

                        <ul className="info-grid">
                            <li>Modelo<br></br>  {item.modelo}</li>
                                
                            <li>Precio ${item.precio}</li>                       
                        </ul>
                            <p className="descripcion">{item.descripcion}</p>
                        {hide ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>:null}

                        {show ? <Link to={'/cart'}><button className="btn btn-dark botonAgregar btn__detail mb-1">Finalizar Compra</button></Link>:null}
                        {show ? <Link to={'/products'}><button className="btn btn-dark botonAgregar btn__detail mb-5">Seguir Comprando</button></Link>:null}
                        

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

