import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Cards = (props) => {
    
    const { id, name, img, price } = props;

    return (
        <>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Button variant="primary">Información</Button>
                    </Card.Body>
            </Card>        
        </>
    );
}

export default Cards