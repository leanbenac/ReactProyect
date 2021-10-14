import ItemCount from '../ItemCount/ItemCount';
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
                <Link to={`/products/${id}`} ><h5 class="card-title">{nombre}</h5></Link>
                <p class="card-text">{modelo}</p>
                <p class="card-text">${precio}</p>  
              </div>
              
              <ItemCount stock={stock} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item
