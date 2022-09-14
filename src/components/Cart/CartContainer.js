import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartContainer = () => {
  const {productCartList, deleteProduct} = useContext(CartContext);
  console.log('productCartList',productCartList)

  return (
    <div>
      <p>Carrito</p>
      {
        productCartList.map(item=>(
          <div>
            <p>Item: {item.name}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
            
            <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
            
          </div>
        ))
      }
    </div>
  )
}

export default CartContainer;