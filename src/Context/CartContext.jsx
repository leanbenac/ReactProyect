import { useState, createContext, useContext } from 'react'

const CartContext = createContext ([]);

export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList] = useState([]);

    const addItem = (item) =>{
        setCartList([...cartList, item]);
    }

    const [qBuy, setqBuy] = useState(0);

    const addCart = (qty) => {
        setqBuy (qBuy+qty)
    }
    // para limpiar items del carrito
    function clearCart(){
        setCartList ([])
        setqBuy(0)
    }

    const clearItem = (id) => {
        let item = cartList.find(item => item.item.id === id);
        let index = cartList.indexOf(item);
        cartList.splice(index,1);
        setqBuy (qBuy-item.cantidad)
        setCartList([...cartList])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,
            addCart,
            qBuy,
            clearItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider