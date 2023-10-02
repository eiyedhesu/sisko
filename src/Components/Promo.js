import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import craft from '../images/categories/craft.jpg'
import mukena from '../images/categories/mukena.jpg'
import jacket from '../images/categories/jacket-coat.jpg'
import pillow from '../images/categories/F3na1Q_slide3.jpg'
import { Link } from 'react-router-dom';
const Promo = () => {
    const gambar1 = mukena
    const gambar2 = craft
    const gambar3 = jacket
    const gambar4 = pillow

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img
                        src={gambar1}
                        alt="Kolom Kiri"

                        className="img-fluid"
                    />
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <img
                                src={gambar2}
                                alt="Kolom Kanan Atas 1"
                                className="img-fluid"
                            />
                        </Col>
                        <Col md={6}>
                            <img
                                src={gambar3}
                                alt="Kolom Kanan Atas 2"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <img
                                src={gambar4}
                                alt="Kolom Kanan Bawah"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <center> <Link to={'/'} >Klik untuk melihat Promo Lainnya...</Link> </center>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Promo;
