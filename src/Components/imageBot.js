import React from 'react'
import { Button, Card } from 'react-bootstrap'
const ImageBot = () => {
    return (
        <div>
            <Card className="bg-dark text-white border-0 " >
                <Card.Img className='image-card' src="https://hijja.sistemtoko.com/img/user/hijja/media/mGMfXL_slide2.jpg" alt="Card image" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center' style={{ marginLeft: '700px' }}>
                    <Card.Title> Best Seller 2023 </Card.Title>
                    <Card.Text className='text-center'>
                        Sambel Legendaris dengan rasa yang Khas
                    </Card.Text>
                    <Card.Text className='text-danger'><strong>Rp.50.000</strong></Card.Text>
                    <Button variant='light'>Add to Cart</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default ImageBot
