import React from 'react';
import { useParams } from "react-router-dom";
//captura el id 
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Products = () => {

    let { id } = useParams();
    console.log(useParams)

    return (
        <main>
            <ItemDetailContainer id={id} />
        </main>
    );
};

export default Products;
