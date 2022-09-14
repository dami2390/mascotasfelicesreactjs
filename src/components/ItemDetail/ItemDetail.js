import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({item}) => {
        const {addProduct} = useContext(CartContext);


   const onAdd = (contador) => {
        const nuevoProducto = {...item, cantidad:contador}
        console.log(nuevoProducto)
        addProduct(nuevoProducto)
   }

  
        return (
            <div>
            <h1>Item Detail Container</h1>
        
            
            <div>
                    <img src={item.img} alt="imagen-producto" />
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />

            </div>

        
    </div>
  )
    


}

export default ItemDetail
