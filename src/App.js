import './App.css'
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer ProxProductos="Próximamente nuestro catalógo"/>
    </div>
  );
}

export default App;
