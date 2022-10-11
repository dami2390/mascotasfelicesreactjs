import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../helper/firebase'
import '../ItemDetail/ItemDetail.css'


function ItemDetailContainer() {

    const { alimentoId } = useParams();

    const [data, setData] = useState([])

    useEffect(()=> {
        const queryRef = doc(db, "items", alimentoId)
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            console.log(newDoc)
            setData(newDoc);
        }).catch(error=>console.log(error))
       
    }, [alimentoId])

    console.log(data)
    return (
        <>
            <div className="ItemDetailContainer">
                
                <ItemDetail item= {data}/>
    
            </div>
        </>
    )
}

export default ItemDetailContainer