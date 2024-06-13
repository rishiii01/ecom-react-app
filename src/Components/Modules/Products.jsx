import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export const Products = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            Product_name: "Product 1",
            Price: 1999,
            image: "/logo12.png",
        },
        {
            id: 2,
            Product_name: "Product 2",
            Price: 2999,
            image: "/logo12.png",
        }
    ]);
    return (
        <Container>
            {items.map((elem) => {
                return (
                    <Card key={elem.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
                        <Card.Body>
                            <Card.Title>{elem.Product_name}</Card.Title>
                            <Card.Text>{elem.Price}</Card.Text>
                            <Button>Buy now</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </Container>
    );
};
export default Products
