import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Class
export default class Finger extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageSequence: 0,
            data: []
        };
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.tapImageSequence();
        // }, 500);
        this.setState({
            ...this.state,
            data: this.props.data
        })
    }

    render() {
        const dots = [];
        this.state.data.forEach((datum) => {
            dots.push(<div className="dot" style={{ 
                width: `${datum.volume}px`,
                height: `${datum.volume}px`,
                top: `${60 - datum.volume/2}px`,
                left: `${datum.time*100 - this.props.offsetLeft - datum.volume/2}px` }} />);
        })
        return (
            <div className="finger--component">
                <div className="header">
                    <img src={require(`../../assets/images/fingers--0.png`)} />
                    <p>{this.props.label}</p>
                </div>
                <div className="timeline">
                    {dots}
                </div>
            </div>
        );
    }
}

// Class Prop
Finger.propTypes = {
};