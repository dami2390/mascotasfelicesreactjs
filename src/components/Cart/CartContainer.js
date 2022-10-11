import React from 'react';
import Button from "@material-ui/core/Button";
import { useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { db } from '../../helper/firebase';
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";
import "./CartContainer.css";


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
    <p>¡Finalizá tu compra!</p>
    <div className="carrito">
      {
        productCartList.length>0 ?
        <>
          {
            productCartList.map(item=>(
              <CartItem  key={item.id} item={item}/>
            ))
          }
          <hr/>
          
          <button className="btn btn-primary" onClick={clearProductCartList}>Vaciar el carrito</button>
          <p>Precio total: $ {getTotalPrice()}</p>
            <form onSubmit={sendOrder}>
              <input type="text" placeholder='Tu nombre'/>
              <input type="text" placeholder='Tu telefono'/>
              <input type="email" placeholder='Tu e-mail'/>
              <button className="btn btn-primary btn-propio" type='submit'>Enviar orden</button>
            </form>
           {/*  <button className="btn btn-primary" onClick={updateOrder}>Actualizar</button> */}
        </>
        :
        <p>No has agregado productos</p>
      }
    </div>
  </div>
)
}

export default CartContainer;