import React from 'react'
import Item from '../Item/Item'
import {Link} from 'react-router-dom';
import './ItemList.css'

function ItemList  ({items}){

    return(
        <div className="ItemList">
           
            {
                items.map(producto=>(
                    <Link style={{textDecoration:"none"}} key={producto.id} to={`/item/${producto.id}`}>
                        <Item item={producto}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList