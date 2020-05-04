import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Class
export default class Waveform extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="control--component">
                <button className="play-pause" onClick={() => this.props.onPlayPauseClicked()}>Play/Pause</button>
                <button className="backward" onClick={() => this.props.onBackwardClicked()}>Backward</button>
            </div>
        );
    }
}

// Class Prop
Waveform.propTypes = {
};