import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { Container } from 'react-bootstrap';
import UsernameForm from '../components/UsernameForm';
import User from '../components/User';
import Loading from '../components/Loading';

class HomePage extends React.Component {
    render() {
        const { app, actions } = this.props;

        return (
            <Container>
                <UsernameForm
                    username={app.get('username')}
                    setUsername={actions.setUsername}
                    apiCallStarted={actions.apiCallStarted}
                    apiCallReset={actions.apiCallReset}
                />
                <Loading
                    showLoading={app.getIn([
                        'userByUsername',
                        'isLoading'
                    ])}
                />
                <User user={app.getIn(['userByUsername', 'response'])}/>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
