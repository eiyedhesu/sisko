import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { Container, Card, Row, Col } from 'react-bootstrap';

const CategoryDetail = () => {
    const { id } = useParams();
    const [categoryDetail, setCategoryDetail] = useState(null);

    useEffect(() => {
        const fetchCategoryDetail = async () => {
            try {
                const response = await axios.get(`https://sistemtoko.com/public/hijja/product?categories=${id}`);
                if (response.status === 200) {
                    console.log(response.data.aaData);
                    setCategoryDetail(response.data.aaData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategoryDetail();
    }, [id]);

    return (
        <Layout>
            <Container>
                <h2>Product Berdasarkan Kategori</h2>
                {categoryDetail ? (
                    <Row>
                        {categoryDetail.map((product) => (
                            <Col key={product.id} className="col-md-3">
                                <Card>
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
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </Layout>
    );
};

export default CategoryDetail;
