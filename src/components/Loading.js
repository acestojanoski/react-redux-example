import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Facebook } from 'react-content-loader';

class Loading extends React.Component {
    render() {
        const { showLoading } = this.props;

        return (
            <React.Fragment>
                <Row className={`mt-5 ${showLoading ? '' : 'd-none'}`}>
                    <Col xs="12" sm="10" md="8" className="mx-auto">
                        <Facebook />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Loading;
