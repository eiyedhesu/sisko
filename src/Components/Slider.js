import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';

function Slider() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch(
                `https://sistemtoko.com/public/hijja/product`
            );
            const data = await response.json();
            console.log(data.aaData);
            setProducts(data.aaData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Container className='slider'>
            <h2>Produk Terbaru</h2>
            <Row>
                {products.slice(0, 4).map((product) => (
                    <Col key={product.id} md={3}>
                        <Card style={{ height: '50px' }}>
                            <Card.Img
                                variant="top"
                                src={product.photo}
                                alt="Product 1"
                            />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text> Rp. {product.price} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Slider;
