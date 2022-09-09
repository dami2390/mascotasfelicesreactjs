import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'

const Cards = ({item}) => {
    
    const { id, name, img, price } = item;

    return (
        
        <>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Link to={`/item/${id}`}>
                            <Button variant="primary">Información</Button>
                        </Link>
                    </Card.Body>
            </Card>        
        </>
    );
}

export default Cards