import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../Components/Layout';
import Slider from '../Components/Slider';
import ImageTop from '../Components/ImageTop';
import Category from '../Components/Category';
import Promo from '../Components/Promo';
import ImageBot from '../Components/imageBot';
import ProductList from './ProductList';


const Home = () => {

    return (
        <Layout>
            <Container>
                <ImageTop />
                <br />
                <Slider />
                <br />
                <br />
                <Category />
                <br />
                <Promo />
                <br />
                <ImageBot />
                <br />
                <ProductList />
            </Container>
        </Layout>
    );
};

export default Home;
