import ItemCount from '../ItemCount/ItemCount'
import Button from "@material-ui/core/Button";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
        const {addProduct} = useContext(CartContext);
        const [cantidad, setCantidad] = useState(0);


   const onAdd = (contador) => {
     
        addProduct(item, contador)
        setCantidad(contador)
   }

   console.log(item)
        return (
            <div className="detailCard">
           
        
            
            <div >
                <div className="divImg">
                    <img className="imgDetail" src={item.img} alt="imagen-producto" />
                </div>
                <div className="divDescripcion">
                    <h4>{item.name}</h4>
                    <p>${item.price},00.-</p>
                    <h8>{item.description}</h8>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    {
                        cantidad>0 && 
                        <Link to="/cart">
                                <Button>Ir al carrito</Button>
                        </Link>
                    }
                </div>
            </div>

        
    </div>
  )
    


}

export default ItemDetail
