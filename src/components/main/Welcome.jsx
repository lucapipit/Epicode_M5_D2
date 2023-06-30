import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ImgWelcome from  "../../assets/books.png";

class Welcome extends Component {
    render() {
        return (
            <Card className="bg-dark text-white rounded-0">
                <Card.Img src={ImgWelcome} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='fs-1 fw-bolder'>BestBooks</Card.Title>
                    <Card.Text className='fs-2 text-dark'></Card.Text>
                    <Card.Text className='fs-2 text-dark'></Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default Welcome