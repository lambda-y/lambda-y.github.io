import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {
    

    return(
        <Jumbotron className='p-3 mb-2 bg-secondary text-white jumbotron-fluid'>
            <Container>
                <Row className='justify-content-center py-2'>
                    <Col>
                        { props.title && <h3 className="display-4 font-weight-bold">{props.title}</h3>}
                        { props.subTitle && <h4>{props.subTitle}</h4>}
                        { props.text && <p>{props.text}</p> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

        
    );
}

export default Hero;