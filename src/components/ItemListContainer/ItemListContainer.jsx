import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {

  const [items, setItems] = useState([])//varios objetos
  // const [item, setItem] = useState({}) //un objeto x id

  const { category } = useParams()

  useEffect(() =>{
    const db = getFirestore();
    // decidir que coleccion quiero traer de firebase
    db.collection('Items').get()//toda la coleccion
    .then(resp => setItems(resp.docs.map(it => ({id: it.id, ...it.data() }))))//capturar la promesa

    // db.collection('Items').doc('TxUPSN56lp6OuPyOIPYN').get()//traer uno
    // .then(resp => setItem({id: resp.id, ...resp.data() } ) )
  }, [category])

  console.log(items);

  return (
          <ItemList />
  )

};

export default ItemListContainer;
