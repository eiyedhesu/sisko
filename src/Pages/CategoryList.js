import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Card, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const CategoryList = () => {
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
        <Layout>
            <Container>
                <Row>
                    {categories.map((c, index) => (
                        <Col xs={4} key={index} className="mb-3">
                            <Card style={{ minHeight: '100px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/cat/${c.product_category_id}`}>
                                            {c.product_category_name}
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
};

export default CategoryList;
