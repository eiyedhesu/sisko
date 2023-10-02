import React from 'react';
import { Container, Row, Col, Dropdown, Image } from 'react-bootstrap';
import layanan from '../images/Screenshot_122.png'
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaCcAmazonPay } from 'react-icons/fa'
const Footer = () => {
    const gambar1 = layanan

    return (
        <>
            <div className="text-center" >
                <Image src={gambar1} alt='layanan' style={{ width: '100%' }} />
            </div>
            <Container className='footer'>

                <Row>

                    <Col md={2}>
                        <h4>FajarStore.</h4>

                    </Col>


                    <Col md={2}>
                        <h4>Navigasi</h4>
                        <Link to="/" className='text-dark'>Beranda</Link><br />
                        <Link to="/" className='text-dark'>Produk</Link><br />
                        <Link to="/" className='text-dark'>Layanan</Link><br />
                        <Link to="/" className='text-dark'>Kontak</Link><br />


                    </Col>


                    <Col md={2}>
                        <h4>Informasi</h4>
                        <Link to="/" className='text-dark'>About Us</Link><br />
                        <Link to="/" className='text-dark'>Informasi Pengiriman</Link><br />
                        <Link to="/" className='text-dark'>Privacy Policy</Link><br />
                        <Link to="/" className='text-dark'>Terms of Service</Link><br />

                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="languageDropdown">
                                Pilih Bahasa
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/">ID</Dropdown.Item>
                                <Dropdown.Item href="/">Eng</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>


                    <Col md={2}>
                        <h4>Customer Service</h4>
                        <Link to="/" className='text-dark'>Hubungi Kami</Link><br />
                        <Link to="/" className='text-dark'>Daftar</Link><br />
                        <Link to="/" className='text-dark'>Masuk</Link><br />
                    </Col>


                    <Col md={4}>
                        <h4>Sosial Media</h4>
                        <ul className="social-media-icons">
                            <a href="/"> <TiSocialFacebook /> </a>
                            <a href="/"> <TiSocialInstagram /> </a>
                            <a href="/"> <TiSocialTwitter /> </a>
                        </ul>
                        <h4>Pembayaran</h4>
                        <ul className="social-media-icons">
                            <a href="/"> <FaCcAmazonPay /> </a>
                            <a href="/"> <FaCcMastercard /> </a>
                            <a href="/"> <FaCcPaypal /></a>
                            <a href="/"> <FaCcVisa /></a>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center" style={{ background: '#ededee', marginTop: '10px' }}>
                &copy; 2023 FajarStore. All Rights Reserved.
            </div>

        </>
    );
}

export default Footer;
