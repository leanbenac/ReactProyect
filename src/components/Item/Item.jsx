// import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import { Link } from 'react-router-dom';


const Item = ({nombre , precio , img , modelo , stock, id}) => {

    return (
      
      <div class="container">
        <div class="row "> 
          <div class="col-sm-6 mt-5">
            <div class="card">
              <img src={img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title mt-3"> {nombre}</h5>
                <Link to={`/products/${id}`} >
                <button className="btn col-xs-6 btn-dark hover m-3 mt-5 " >Ver detalles </button>
                </Link>
                <p class="card-text">{modelo}</p>
                <p class="card-text m-2">Precio: ${precio}</p>  
                <p>En stock: {stock}</p>
              </div>

              {/* <ItemCount stock={stock} /> */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item
