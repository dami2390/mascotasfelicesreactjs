import React from "react";
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.Texto}</h1>
            <h2>{props.Precio}</h2>
            <ItemCount stock={5} initial={1}/>
        </div>
    );
}

ItemListContainer.defaultProps = {
    Texto: "Producto 1",
    Precio: 12,
}