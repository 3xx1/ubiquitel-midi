import React from 'react';
import PropTypes from 'prop-types';
import { PlayArrow, Pause, SkipPrevious } from '@material-ui/icons';
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
                <div className="control--button-container">
                    <button className="control--button backward" onClick={() => this.props.onBackwardClicked()}>
                        <SkipPrevious style={{ fontSize: 80 }} />
                    </button>
                    <button className="control--button play-pause" onClick={() => this.props.onPlayPauseClicked()}>
                        <PlayArrow style={{ fontSize: 80, marginRight: -30 }} />
                        <Pause style={{ fontSize: 80 }} />
                    </button>
                </div>
            </div>
        );
    }
}

// Class Prop
Waveform.propTypes = {
};