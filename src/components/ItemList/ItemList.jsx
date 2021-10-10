import React, { useEffect, useState } from 'react'
import {Container , Row, Col, } from 'react-bootstrap';
import { productsList } from '../../data/data';
import Item from '../Item/Item';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
            }, 2000);
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
            //eslint-disable-next-line
        }, []);



        return (


            <>
                {products.length ? (
                    <>
                        {
                            products.map((product) =>  (
                                <Container>
                                    <Row>
                                        
                                            <Col md="auto" lg="4">
                                                
                                                <div>
                                                    <Item
                                                        key={product.id} 
                                                        nombre={product.nombre}
                                                        stock={product.stock}
                                                        precio={product.precio}
                                                        img={product.img}
                                                    />
                                                </div>
                                                
                                            </Col> 
                                        
                                    </Row>
                                </Container>
                            )) 
                            
                        }
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

