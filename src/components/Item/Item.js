import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../Cards'

const Item = () => {
    
    const alimentos = [
        {
            "id": 1,
            "name": "Old prince 15 kg",
            "price": "1500",
            "img": "https://dami2390.github.io/mascotasfelices/img/alimento1.png",
        },
        {
            "id": 2,
            "name": "Maintenance Criador 22 kg",
            "price": "2500",
            "img": "https://dami2390.github.io/mascotasfelices/img/alimento2.png",
        }
    ];

    const [alimento, setAlimento] = useState([]);

    const consulta = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(alimentos);
            }, 2000);
        });
    }
    
    useEffect(() => {
        const resultadoConsulta = async() => {
            try {
                const cardAlimentos = await consulta();
                setAlimento(cardAlimentos);
            } catch (error) {
                console.log("Error!")
            }
        }
        resultadoConsulta();
    })

    return (
        <>
            <div>
                {alimento.map((alimento, i) => {
                    return (
                        <div key={i}>
                            <Cards key={i} name={alimento.name} price={alimento.price} img={alimento.img}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Item