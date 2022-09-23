import React from 'react';
import { useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { db } from '../../helper/firebase';
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";

export const CartContainer = () => {
  const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value
      },
      items: productCartList,
      total: getTotalPrice()
    }
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db,"orders");
    //agregamos el documento
    addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
    
  }

  const updateOrder = ()=>{
    const queryRef = doc(db,"items","NzDR8DGcyTNdckE4CtC2");
    updateDoc(queryRef, {
      categoria: "accesorio",
      img: "https://dami2390.github.io/mascotasfelices/img/accesorio2.png",
      price: 3000,
      name:"Juguete para Gato - Pluma"
    }).then(()=>console.log("producto actualizado"))
  }

  return (
    <div>
    <p>CartContainer</p>
    <div>
      {
        productCartList.length>0 ?
        <>
          {
            productCartList.map(item=>(
              <CartItem key={item.id} item={item}/>
            ))
          }
          <hr/>
          
          <button onClick={clearProductCartList}>Vaciar el carrito</button>
          <p>Precio total: {getTotalPrice()}</p>
            <form onSubmit={sendOrder}>
              <input type="text" placeholder='nombre'/>
              <input type="text" placeholder='telefono'/>
              <input type="email" placeholder='email'/>
              <button type='submit'>enviar orden</button>
            </form>
            <button onClick={updateOrder}>actualizar</button>
        </>
        :
        <p>No has agregado productos</p>
      }
    </div>
  </div>
)
}

export default CartContainer;