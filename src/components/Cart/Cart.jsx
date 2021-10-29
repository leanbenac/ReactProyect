import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom';
import "../Cart/Cart.css";

const Cart = () => {
    
    const {cartList, clearCart, clearItem} = useCartContext();

    const pxq = (a,b) => {
        return a*b
    }
    
    let total = 0;
    
    const totalPxQ = (a, b) => {
        let sum = a*b;
        total = total + sum;
        return total
    }

    total = cartList.map((item=> (totalPxQ(item.cantidad,item.item.precio))))
    /* verdadera cuando el carrito está vacío o
    falsa cuando tiene algun producto dentro*/
    let cartMessage = true;
    if(cartList.length>0){
        cartMessage = false;
    }

    const finishBuy = () => {
        alert(`Gracias por adquirir nuestros productos`);
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
                            {cartList.map(item =>
                            <li key={item.id} className="produc__add">
                                Marca: {item.item.nombre} <br></br>
                                Modelo: {item.item.modelo} <br></br>
                                Cantidad: {item.cantidad} <br></br>
                                Precio: $ {item.item.precio} <br></br>
                                Total: ${pxq(item.cantidad,item.item.precio)} <br></br>
                            <button onClick={()=>clearItem(item.item.id)} className="btn btn-info  m-1"> X </button></li>
                            )}
                        </ul>
                        <h3 className="total">Total Carrito: $ {total[total.length-1]} </h3>
                        <div className="btnCart">
                            <button onClick={()=>clearCart()} className="btn btn-dark botonAgregar m-1">Vaciar Carrito</button>
                            <button onClick={()=>finishBuy()} className="btn btn-dark botonAgregar m-1">Finalizar Compra</button>                        
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Cart
