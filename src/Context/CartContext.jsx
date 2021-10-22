import { useState, createContext, useContext } from 'react'

const CartContext = createContext ([]);

export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList] = useState([]);

    const addItem = (item) =>{
        setCartList([...cartList, item]);
    }

    function clearCart(){
        setCartList ([])
    }

    console.log();
    return(
        <CartContext.Provider value= {{
            cartList,
            addItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider