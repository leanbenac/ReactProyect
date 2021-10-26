import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import "../Cart/Cart.css";

const Cart = () => {
    const {cartList, clearCart} = useCartContext();
    
    var cartMessage = true;

    if(cartList.length>0){
        cartMessage = false;
    }

    return (
        <section>
            <div>
                    <h1 className="cart__title">Productos Adquiridos</h1>
                { 
                    cartMessage ?
                    <div className="btnCart btnCart__title">
                        <h2>Aun no has agregado ningun producto</h2>
                        <Link to="/products"><button  className="btn btn-dark botonAgregar m-1 ">Elegir producto</button></Link>                    
                    </div>
                :
                    <div>
                        <ul>
                            {cartList.map(item => <li key={item.id} className="produc__add">{item.item.nombre} {item.item.modelo} </li>)}
                        </ul>
                        <div className="btnCart">
                            <Link to="/products"><button  className="btn btn-dark botonAgregar m-1">Seguir Comprando</button></Link>
                            <button onClick={()=>clearCart()} className="btn btn-dark botonAgregar m-1">Vaciar Carrito</button>
                        </div>
                    </div>
                }
            </div>
            </section>
    )
}

export default Cart
