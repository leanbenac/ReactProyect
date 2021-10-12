import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';

const Item = ({nombre , precio , img , modelo , stock}) => {
    return (
      <div class="container">
        <div class="row "> 
          <div class="col-sm-6">
            <div class="card">
              <img src={img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
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
