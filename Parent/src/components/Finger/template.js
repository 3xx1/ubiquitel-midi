import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Class
export default class Finger extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageSequence: 0,
            data: [],
            isMute: false,
            isSolo: false,
            isRecording: false
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
            <div className={`finger--component ${this.state.isRecording ? 'is-recording' : ''}  ${this.state.isMute ? 'is-mute' : ''}  ${this.state.isSolo ? 'is-solo' : ''}`}>
                <div className="header">
                    <img src={require(`../../assets/images/fingers--0.png`)} />
                    <p>{this.props.label}</p>
                    <div className="controls">
                        <button className="controls-button mute" onClick={() => { this.setState({ ...this.state, isMute: !this.state.isMute }) }}>M</button>
                        <button className="controls-button solo" onClick={() => { this.setState({ ...this.state, isSolo: !this.state.isSolo }) }}>S</button>
                        <button 
                            className="controls-button recording"
                            onClick={() => { this.setState({ ...this.state, isRecording: !this.state.isRecording }) }}
                        >R</button>
                    </div>
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