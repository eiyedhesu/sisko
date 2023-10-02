import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Card, Container, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);



    const getCategory = async () => {
        try {
            const response = await axios.get('https://sistemtoko.com/public/hijja/cat');
            if (response.status === 200) {
                console.log(response.data.aaData);
                setCategories(response.data.aaData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <Container>
            <Col>
                <h2>Jelajahi Kategori</h2>
            </Col>
            <Col className='text-end' style={{ marginBottom: '5px' }} >
                <Button variant='outline-light' style={{ border: '1px solid black' }}>
                    <Link to="/cat/list" className='text-dark'>Show More Category</Link>
                </Button>
            </Col>
            <Row>
                {categories
                    .slice(0, 3)
                    .map((c, index) => (
                        <Col xs={4} key={index} className="mb-3">
                            <Card style={{ minHeight: '100px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/cat/${c.product_category_id}`} className='text-dark'>
                                            {c.product_category_name}
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Category;
