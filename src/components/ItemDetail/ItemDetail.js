import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({item}) => {
        const {addProduct} = useContext(CartContext);
        const [cantidad, setCantidad] = useState(0);


   const onAdd = (contador) => {
     
        addProduct(item, contador)
        setCantidad(contador)
   }

   console.log(item)
        return (
            <div>
            <h1>Item Detail Container</h1>
        
            
            <div>
                    <img src={item.img} alt="imagen-producto" />
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    {
                        cantidad>0 && 
                        <Link to="/cart">
                                <button>Ir al carrito</button>
                        </Link>
                    }

            </div>

        
    </div>
  )
    


}

export default ItemDetail
