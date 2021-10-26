import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Products from './pages/Products';
import Cart from './components/Cart/Cart';
import CartContextProvider  from './Context/CartContext';


function App() {

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

                  <Route exact path="/home" >
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
