// import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
// import DetailPage from './pages/DetailPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




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

    <Router>
        <div className="wrapper">
          <NavBar />
            <Switch>

              <Route exact path="/productos">
                <ItemListContainer />
              </Route>

              <Route exact path="/productos/:id">
              <ItemDetailContainer id={1} />
              </Route>

              <Route exact path="/" >
                <Home />
              </Route>

            </Switch>
            
        </div>
    </Router>
  );
}

export default App
