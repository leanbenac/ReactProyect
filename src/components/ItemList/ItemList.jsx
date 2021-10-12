import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getAllProductsFromDB } from '../../helpers/getData';

import ProgressBar from 'react-bootstrap/ProgressBar';

const ItemList = () => {

    const [products, setProducts] = useState([]);

        useEffect(() => {
          getAllProductsFromDB (setProducts);
          //eslint-disable-next-line
      }, []);

      return (
    <>
    {products.length ? (
      <>
        <div className="container">
          <div className="row">
            {
                products.map((product) =>  (
                
                <div className="col-sm-12 col-md-6 col-lg-4 mb-5"  >
                <Item
                key={product.id} 
                nombre={product.nombre}
                stock={product.stock}
                precio={product.precio}
                img={product.img}
                />
                </div> 
              )) 
            }
          </div>
        </div>
      </>
    ) : (
    
            <ProgressBar>
              <ProgressBar striped variant="success" animated="boolean"  label="Visualizing 40%" now={35} key={1} />
            </ProgressBar>
    )}
            </>
    )
}

export default ItemList

