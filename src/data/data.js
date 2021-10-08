/*En este archivo al que he llamado data.js, he declarado una constante con un array de productos, el cual a la vez estoy exportando con la palabra reservada "export" de esa manera podré importarla desde el componente que así lo requiera*/
import moto1 from '../../img/moto1.jpg';
import moto2 from '../../img/moto2.jpg';
import moto3 from '../../img/moto3.jpg';
import moto4 from '../../img/moto4.jpg';
import moto5 from '../../img/moto5.jpg';
import moto6 from '../../img/moto6.jpg';


export const productList = [
    {
        id:1 ,
        nombre: 'Ducatti',
        stock:6,
        precio: 180000,
        img: moto1,
        },

        {
        id:2 ,
        nombre: 'Honda',
        stock:6, 
        precio: 250000, 
        img: moto2,
        },

        {
        id:3 , 
        nombre: 'BMW', 
        stock:6, 
        precio: 189000, 
        img: moto3
        },

        {
        id:4 , 
        nombre: 'KTM',  
        stock:6,
        precio: 162000, 
        img: moto4
        },

        {
        id:4 , 
        nombre: 'KTM',  
        stock:6,
        precio: 162000, 
        img: moto4
        },

        {
        id:5 , 
        nombre: "Benelli", 
        stock:6, 
        precio: 153000, 
        img: moto5
        },

        {
        id:6 , 
        nombre: "Yamaha", 
        stock:6, 
        precio: 171000, 
        img: moto6
        },


];
    