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
                <button className="control--button backward" onClick={() => this.props.onBackwardClicked()}>
                    <SkipPrevious />
                </button>
                <button className="control--button play-pause" onClick={() => this.props.onPlayPauseClicked()}>
                    <PlayArrow />
                    <Pause />
                </button>
            </div>
        );
    }
}

// Class Prop
Waveform.propTypes = {
};