import {useState, useEffect} from 'react'
import getFetch from '../../../src/helper/helper'

const ItemDetail = () => {
   

    const [data, setData] = useState({})

    useEffect(()=> {
        getFetch
        .then(response => {
            setData(response.find(prod => prod.id === 1))
           
        })
    }, [])

    console.log(data)
        return (
            <div>
            <h1>Item Detail Container</h1>
        
            
            <div>
                    <img src={data.img} alt="" />
                    <h2>{data.name}</h2>
                    <h3>{data.price}</h3>
                    <p>{data.description}</p>

            </div>

        
    </div>
  )
    


}

export default ItemDetail
