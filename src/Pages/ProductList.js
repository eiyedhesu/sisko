import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12); // Jumlah produk yang akan ditampilkan awalnya

    const fetchProducts = async () => {
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

    const loadMoreProducts = () => {
        setVisibleProducts(visibleProducts + 12); // Tambah 12 produk
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container className='product-list'>
            <Row>
                <Col>
                    <center><h1>Daftar Produk</h1></center>
                    <Row>
                        {products.slice(0, visibleProducts).map((product) => (
                            <Col key={product.id} md={3}>
                                <Card>
                                    <Card.Img variant="top" src={product.photo} alt={product.name} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text> Rp. {product.price} </Card.Text>
                                        <Button>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {visibleProducts < products.length && (
                        <center>
                            <Button onClick={loadMoreProducts}>Load More</Button>
                        </center>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ProductList;
