import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Products from './pages/Products';
import Cart from './components/Cart/Cart';
import  CartContextProvider  from './Context/CartContext';



function App() {
  


//   const [carrito,setCarrito] = useState(0);
//   const [open,setOpen] = useState(true)
//   const toggleMenu = () => {
//     setOpen(!open)
//   }
//   const addToCartWidget = (articles) => {
//     setCarrito(carrito + articles)
// }

  return (

    <CartContextProvider>

        <Router>

            <div className="wrapper">
              <NavBar />
                <Switch>

                  <Route exact path="/products">
                    <ItemListContainer />
                  </Route>

                  <Route exact path="/products/:id">
                  <Products />
                  </Route>

                  <Route exact path="/" >
                    <Home />
                  </Route>

                  <Route exact path="/cart">
                    <Cart/>
                  </Route>

                </Switch>
              <Footer />
            </div>

        </Router>

    </CartContextProvider >
  );
}

export default App
