import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import arregloProductos from '../../helper/helper'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {

    const { alimentoId } = useParams();

    const [data, setData] = useState([])

    const obtenerProductos = () => {
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                resolve(arregloProductos)
                reject('Error')
                console.log(arregloProductos)
            },1000 );
        })
    }

    useEffect(()=> {
        const prodAsync = async () => {
            try {
                const prodSel = await obtenerProductos();
                setData(prodSel.find(prod => prod.id == alimentoId));
            }
            catch (err) {
                console.log("Error 404")
            }
        }
        prodAsync();
    }, [alimentoId])

    console.log(data)
    return (
        <>
            <div >
                <h1> Detalle del producto: </h1>
                <ItemDetail item= {data}/>
               {/*  <ItemDetail/> */}
            </div>
        </>
    )
}

export default ItemDetailContainer