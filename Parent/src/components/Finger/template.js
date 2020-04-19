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
        // setInterval(() => {
        //     this.tapImageSequence();
        // }, 500);
    }

    render() {
        return (
            <div className="finger--component">
                <div className="header">
                    <img src={require(`../../assets/images/fingers--0.png`)} />
                    <p>{this.props.label}</p>
                </div>
                <div className="timeline">
                </div>
            </div>
        );
    }
}

// Class Prop
Finger.propTypes = {
};