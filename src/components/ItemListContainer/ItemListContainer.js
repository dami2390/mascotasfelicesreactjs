import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../../helper/firebase"


function ItemListContainer () {
    const {tipoProducto} = useParams();
    console.log(tipoProducto)
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            try {
                let queryRef = ""
                if(!tipoProducto){
                    queryRef = collection(db, "items")
                } else{
                    queryRef = query(collection(db, "items"),where("categoria", "==", tipoProducto));
                }
               
                const response = await getDocs(queryRef); //el getDocs ya retorna una promise. No es necesario armarla
                const datos = response.docs.map(doc =>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setProductos(datos)
            } catch (error) {
                console.log(error);
            }
          
        }
        getData();
    },[tipoProducto])
    console.log('productos', productos) 
       
    return(
        <div className="pending">
            <p>Item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer