// componente inteligente
import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductById(id, setProduct);
        console.log(product);
        // eslint-disable-next-line
        }, []);
        

    return (
        <div>
            <section>
                {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
            </section>   
        </div>
    )
}

export default ItemDetailContainer
