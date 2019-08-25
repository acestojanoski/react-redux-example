import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="10" md="8" className="mt-5 mx-auto text-center p-5">
            <Card
              bg="light"
              className="mx-auto mt-5 p-5"
              style={{width: '100%'}}
            >
              <Card.Title className="p-5">
                404 | Not Found
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
