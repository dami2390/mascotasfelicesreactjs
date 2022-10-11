import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import "../Cart/CartContainer.css"
import Button from "@material-ui/core/Button";


export const CartItem = ({item}) => {
    const {deleteProduct} = useContext(CartContext);

    return (
        <div className="carritoCard">
            <div className='cart-img-container'>
                <img className="img-producto" src={item.img} alt={item.name}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.name}</p>
                
                <h7>Precio unitario: {item.price}</h7>
                <br></br>
                <h7>Cantidad: {item.cantidad}</h7>
                <br></br>
                <h7>Precio total: $ {item.totalPrice}</h7>
                <br></br>
                <button className="btn btn-primary" onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}