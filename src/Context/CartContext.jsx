import { useState, createContext, useContext } from 'react'

const CartContext = createContext ([]);

export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList] = useState([]);

    const addItem = (item) =>{
        setCartList([...cartList, item]);
    }

    // para limpiar items del carrito
    function clearCart(){
        setCartList ([])
    }

    // para remover un item seleccionado
    function removeToCart(id) {
        let item = cartList.filter((item) => item.id === id);
        
        setCartList([...cartList, item]);
    }

    console.log();
    return(
        <CartContext.Provider value= {{
            cartList,
            addItem,
            clearCart,
            removeToCart,
        }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider