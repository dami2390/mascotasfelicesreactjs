import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'

const Item = ({item}) => {
    
    const { id, name, img, price } = item;

    return (
        
        <>
            <Card style={{ width: '18rem', margin: '10px' ,display: "flex", justifyContent: "center", alignItems: "center"}} key={id}>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <Link to={`/item/${id}`}>
                            <Button variant="primary">Detalles</Button>
                        </Link>
                    </Card.Body>
            </Card>        
        </>
    );
}

export default Item