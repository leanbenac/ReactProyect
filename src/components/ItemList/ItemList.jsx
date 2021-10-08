import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Container, Row, Col } from 'react-bootstrap';
import { productList } from '../../data/data.js';


const ItemList = ( {addToCartWidget} ) => {


    const [products, setProducts] = useState ([]);

    const getProducts = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(productList);
        },2000);
    });


    const getProductsFromDB = async () => {
        try {
        const result = await getProducts;
        setProducts(result);
        } catch (error) {
        alert('No podemos mostrar los productos en este momento');
        }
    };


    useEffect(() => {
        getProductsFromDB();
    }, []);


    return (
            <div>
                {products.lenght ? (
                <Container>
                    <Row>
                    {products.map((product) => {
                        return(
                        <div key={product.id} >
                            <Item
                                nombre={product.nombre}
                                stock={product.stock}
                                precio={product.precio}
                                img={product.img}
                                addToCartWidget={addToCartWidget}
                            />
                        </div>
                        )}
                        )}</Row>
                    </Container>
            ) : (<p>Cargando productos...</p>) }
            </div>
        );
    };
    export default ItemList;