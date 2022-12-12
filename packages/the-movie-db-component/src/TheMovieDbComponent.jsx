import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';
import { StyledContainer, StyledGreeting } from './TheMovieDbComponentStyles';

import HomeScreen from './HomeScreen';

class TheMovieDbComponent extends Component {
    static propTypes = {
        name: PropTypes.string,
    };

    static defaultProps = {
        name: 'User',
    };

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        const { name } = this.props;
        const { counter } = this.state;

        const message =
            counter === 0
                ? 'You should try clicking the button.'
                : `You've clicked the button aaa ${counter} time${counter > 1 ? 's' : ''}.`;

        return (
            <StyledContainer>
                <HomeScreen />
                {/* <StyledGreeting>Hello {name}!</StyledGreeting>
                <div>{message}</div>
                <Button
                    label="Click here"
                    appearance="primary"
                    onClick={() => {
                        this.setState({ counter: counter + 1 });
                    }}
                /> */}
            </StyledContainer>
        );
    }
}

export default TheMovieDbComponent;
