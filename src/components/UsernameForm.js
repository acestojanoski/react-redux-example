import React from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

class UsernameForm extends React.Component {
    usernameChange = (event) => {
        const { setUsername } = this.props;
        setUsername(event.target.value);
    }

    fetchUser = () => {
        const { username, apiCallStarted, setUsername } = this.props;
        apiCallStarted('userByUsername', { username });
        setUsername('');
    }

    resetUser = () => {
        const {apiCallReset} = this.props;
        apiCallReset('userByUsername');
    }

    render() {
        const { username } = this.props;

        return (
            <React.Fragment>
                <Row>
                    <Col xs="6" className="mt-4 mx-auto">
                        <FormControl
                            placeholder="Enter username"
                            type="text"
                            value={username}
                            onChange={this.usernameChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2 text-center">
                        <Button
                            variant="success"
                            onClick={this.fetchUser}
                        >
                            Get User
                        </Button>
                        <Button
                            variant="danger"
                            className="ml-2"
                            onClick={this.resetUser}
                        >
                            Reset
                        </Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UsernameForm;
