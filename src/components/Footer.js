import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3"> 
                    <Col className="p-0" md={3} sm={12}>
                        <SocialIcon url="https://www.linkedin.com/in/ryleylamb/" />
                        <SocialIcon url="https://github.com/lambda-y" />
                        <SocialIcon url="https://www.youtube.com/channel/UC0mZCk7DDW28lLxOUBpbUUg" />
                        <SocialIcon url="mailto:ryleylamb@gmail.com" />
                    </Col>

                    <Col className="p-0 d-flex justify-content-end">
                        2021
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;