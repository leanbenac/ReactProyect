import './App.css';
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
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
