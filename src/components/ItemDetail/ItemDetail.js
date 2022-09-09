import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({perro}) => {
   const onAdd = (contador) => {
        console.log(contador)
   }
   const data = perro
  
        return (
            <div>
            <h1>Item Detail Container</h1>
        
            
            <div>
                    <img src={data.img} alt="imagen-producto" />
                    <h2>{data.name}</h2>
                    <h3>{data.price}</h3>
                    <p>{data.description}</p>
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />

            </div>

        
    </div>
  )
    


}

export default ItemDetail
