import React from 'react';
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
                    <button className="control--button backward" onClick={() => this.props.onPauseBackwardClicked()}>
                        <img src={this.props.isPlaying ? require(`../../assets/images/icon--stop.svg`) : require(`../../assets/images/icon--back.svg`)} />
                    </button>
                    <button className="control--button play" onClick={() => this.props.onPlayClicked()}>
                        <img src={require(`../../assets/images/icon--play.svg`)} />
                    </button>
                    <button className="control--button record" onClick={() => this.props.onRecording()}>
                        <img src={require(`../../assets/images/icon--record.svg`)} />
                    </button>
                </div>
            </div>
        );
    }
}

// Class Prop
Waveform.propTypes = {
};