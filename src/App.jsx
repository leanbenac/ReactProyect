import './App.css';
// import React, { useState } from 'react';
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App
