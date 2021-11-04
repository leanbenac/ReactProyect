import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
import firebase from 'firebase';
import { getFirestore } from '../../services/getFirebase';

	const Cart = () => {

		const { cartList, clearCart, clearItem, totalPxQ } = useCartContext();

		const pxq = (a, b) => {
			return a * b;
		};

    const finishBuy = () => {
			let order = {};
			order.date = firebase.firestore.Timestamp.fromDate(new Date());
			order.buyer = {name: 'Leandro Iván', email:'leo_8840@hotmail.com', phone: 1133369420, payment:'card'};
			order.total = totalPxQ();
			order.items = cartList.map(cartItem => {
				const id = cartItem.item.id;
				const item = cartItem.item.nombre;
				const precio = pxq(cartItem.item.precio, cartItem.cantidad);
				const cantidad = cartItem.cantidad;

				return {id, item, precio, cantidad}
			})

			const dbOrder = getFirestore();
    
			const orderReady = dbOrder.collection('orders')
			orderReady.add(order)
			.then((IdDocumento)=>{
				setTimeout(alert(`Su número de pedido es ${IdDocumento.id} y sera procesado en instantes`), 3000)
			})
			.catch(error => {
				console.log(error)
			})
			.finally(()=>{
				alert(`Su compra se ha realizado con éxito, a la brevedad recibira su recibo y factura ¡gracias por su compra!`)
			})
		
			clearCart();


		const updateItems = dbOrder.collection('cursos').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id));

    const batch = dbOrder.batch();

    updateItems.get()
    .then(collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartList.find(it => it.item.id === docSnapshot.id).cantidad
        })
      })
      batch.commit().then(resp => {
        console.log('modificado');
      })
      .catch(er => {
        console.log(er);
      })
    })
  }

		let cartMessage = true;
		if (cartList.length > 0) {
			cartMessage = false;
		}

		return (
			<section>
				<div>
					<h1 className="cart__title">Productos Adquiridos</h1>
					{cartMessage ? (
						<div className="btnCart btnCart__title">
							<h2>Aun no has agregado ningun producto</h2>
							<Link to="/">
								<button className="btn btn-dark botonAgregar m-1 ">
									Elegir producto
								</button>
							</Link>
						</div>
					) : (
						<div>
							<ul>
								{cartList.map((item) => (
									<li key={item.nombre} className="produc__add">
										Marca: {item.item.nombre} <br></br>
										Modelo: {item.item.modelo} <br></br>
										Cantidad: {item.cantidad} <br></br>
										Precio: $ {item.item.precio} <br></br>
										Total: ${pxq(item.cantidad, item.item.precio)} <br></br>
										<button
											onClick={() => clearItem(item.item.id)}
											className="btn btn-info  m-1"
										>
											{" "}
											X{" "}
										</button>
									</li>
								))}
							</ul>
							<h3 className="total">
								Total Carrito: USD {totalPxQ()}
							</h3>

							<div className="btnCart">
								<button
									onClick={() => clearCart()}
									className="btn btn-dark botonAgregar m-1"
								>
									Vaciar Carrito
								</button>
								<button
									onClick={() => finishBuy()}
									className="btn btn-dark botonAgregar m-1"
								>
									Finalizar Compra
								</button>
							</div>
						</div>
					)}
				</div>
			</section>
		);
	};

	export default Cart
