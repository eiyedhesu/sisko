import React from 'react'
import { Button, Card } from 'react-bootstrap'
const ImageTop = () => {
    return (
        <div>
            <Card className="bg-dark text-white border-0 " >
                <Card.Img className='image-card' src="https://hijja.sistemtoko.com/img/user/hijja/media/nVHxmb_slide1.jpg" alt="Card image" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center' style={{ marginLeft: '700px' }}>
                    <Card.Title> Best Seller 2023 </Card.Title>
                    <Card.Text className='text-center'>
                        Hingga saat ini masih mejadi <br></br>pavorit banyak orang dengan produknya
                    </Card.Text>
                    <Card.Text className='text-danger'><strong>Rp.100.000</strong></Card.Text>
                    <Button variant='light'>Add to Cart</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default ImageTop
