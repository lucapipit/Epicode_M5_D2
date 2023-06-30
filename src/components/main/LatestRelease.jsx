import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import SingleCard from './SingleCard';


class LatestRelease extends Component {
    constructor(props){
        super(props);
    }
    myFunc(){
        let myvar = 1;
        console.log(myvar);
        myvar = 2;
        return myvar;
    } 
    render() {
    return (
        <Container>
            <Row className='my-5 d-flex flex-wrap justify-content-center'>
            {
                // this.myFunc()
            }
            {   
            
            this.props.cat.map((book) => {
                
                return (<SingleCard
                    key={book.asin}
                    img={book.img}
                    title={book.title}
                    price={book.price}
                />)
            })
            }
            
                
            </Row>
        </Container>
    )
    }
}

export default LatestRelease