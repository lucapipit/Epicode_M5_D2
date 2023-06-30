import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleCard extends Component {
    constructor(props){
        super(props);
        this.state = {isSelected: false}
    }
    selected(){
        this.setState(this.state.isSelected ? {isSelected: false} : {isSelected: true})
    }
    render() {
        return (
            <Card className='m-1' style={{ width: '18rem',  border: this.state.isSelected ? "solid 2px blue" : "" }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.price}
                    </Card.Text>
                    <Button onClick={()=>{this.selected()}} variant="outline-primary" className='w-100'>Buy</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleCard