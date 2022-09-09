import { useEffect, useState } from "react";
import './ItemListContainer.css';
import arregloProductos from "../../helper/helper";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer () {
    const {tipoProducto} = useParams();
    console.log(tipoProducto)
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    }, [tipoProducto])

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
               
                setProductos(nuevaLista)
            }
        })
    },)

    console.log('productos', productos)
    return(
        <div className="pending">
            <p>Item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer