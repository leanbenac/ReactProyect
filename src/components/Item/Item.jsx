// import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import { Link } from 'react-router-dom';


const Item = ({nombre , precio , img, stock, id, category}) => {

    return (
      
      <div className="container">
        <div className="row "> 
          <div className="col-sm-6 mt-5">
            <div className="card">
              <img src={img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title mt-3"> {nombre}</h5>
                <Link to={`/detail/${id}`} >
                <button className="btn col-xs-6 btn-dark hover m-3 mt-5 " >Ver detalles </button>
                </Link>
                <p className="card-text">{category}</p>
                <p className="card-text m-2">Precio: ${precio}</p>  
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
