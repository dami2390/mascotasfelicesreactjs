import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';


export const CartItem = ({item}) => {
    const {deleteProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.img} alt={item.name}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.name}</p>
                <p>precio unitario: {item.price}</p>
                <p>cantidad: {item.cantidad}</p>
                <p>Precio total: {item.totalPrice}</p>
                <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}