import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {cartList, clearCart} = useCartContext();

    return (
        <section>
            <div>
                <h1>Productos Adquiridos</h1>
                <ul>
                {cartList.map(item => <li key={item.id}>{item.item.nommbre}</li>)}
                </ul>

                <Link to="/products"><button  className="btn btn-dark botonAgregar m-1">Seguir Comprando</button></Link>
                <button onClick={()=>clearCart()} className="btn btn-dark botonAgregar m-1">Vaciar Carrito</button>
            </div>
            </section>
    )
}

export default Cart
