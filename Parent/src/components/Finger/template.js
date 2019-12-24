import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Class
export default class Finger extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageSequence: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.tapImageSequence();
        }, 500);
    }

    tapImageSequence() {
        this.setState({...this.state, imageSequence: 1});
        setTimeout(() => { this.setState({...this.state, imageSequence: 2}); }, 50);
        setTimeout(() => { this.setState({...this.state, imageSequence: 1}); }, 100);
        setTimeout(() => { this.setState({...this.state, imageSequence: 0}); }, 150);
    }

    render() {
        return (
            <div className="finger--component">
                <img src={require(`../../assets/images/fingers--${this.state.imageSequence}.png`)} />
            </div>
        );
    }
}

// Class Prop
Finger.propTypes = {
};