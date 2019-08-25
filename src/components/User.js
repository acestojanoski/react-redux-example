import React from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';

class User extends React.Component {
    render() {
        const { user } = this.props;

        let body = (
            <Card
                className="mx-auto"
                style={{ width: '100%' }}
                bg="info"
                text="white"
            >
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                        {user ? user.getIn(['0', 'name']) : ''}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                        {user ? user.getIn(['0', 'username']) : ''}
                    </Card.Subtitle>
                    <hr />
                    <Card.Text>
                        Email: {user ? user.getIn(['0', 'email']) : ''}<br />
                        Phone: {user ? user.getIn(['0', 'phone']) : ''}<br />
                        Address:{' '}
                        {user ? user.getIn(['0', 'address', 'street']) : ''}{', '}
                        {user ? user.getIn(['0', 'address', 'suite']) : ''}{', '}
                        {user ? user.getIn(['0', 'address', 'city']) : ''}{', '}
                        {user ? user.getIn(['0', 'address', 'zipcode']) : ''}
                    </Card.Text>
                </Card.Body>
            </Card>
        );

        if (user) {
            if (user.size === 0) {
                body =  (
                    <Alert
                        variant="warning"
                        style={{ width: '100%' }}
                        className="mx-auto"
                    >
                        User not found.
                    </Alert>
                );
            }
        }

        return (
            <React.Fragment>
                <Row className={`mt-5 ${user ? '' : 'd-none'}`}>
                    <Col xs="12" sm="10" md="8" className="mx-auto">
                        {body}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default User;
