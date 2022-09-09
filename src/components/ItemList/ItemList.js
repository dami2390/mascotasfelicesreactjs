import React from 'react'
import Item from '../Item/Item'
import {Link} from 'react-router-dom';

function ItemList  ({items}){

    return(
        <div >
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                    <Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item item={producto}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList