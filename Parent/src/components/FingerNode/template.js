import React from 'react';
import './style.scss';

// Class
export default class FingerNode extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isRecording: false,
        isSolo: false,
        isMute: false,
        fingerImgIndex: 0,
        isTapping: false
      };
    }

    tapFinger() {
      const stepMs = 75;
      this.setState({ ...this.state, isTapping: true, fingerImgIndex: 1 });
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 2 }) }, stepMs * 1);
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 1 }) }, stepMs * 2);
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 0 }) }, stepMs * 3);
      setTimeout(() => { this.setState({ ...this.state, isTapping: false }) }, stepMs * 4);
    }

    handleRecordingClick() {
      this.setState({
        ...this.state,
        isRecording: !this.state.isRecording
      });
      this.props.updateIsRecording(this.state.isRecording);
    }

    handleSoloClick() {
      this.setState({
        ...this.state,
        isSolo: !this.state.isSolo
      });
      this.props.updateIsSolo(this.state.isSolo);
    }

    handleMuteClick() {
      this.setState({
        ...this.state,
        isMute: !this.state.isMute
      });
      this.props.updateIsMute(this.state.isMute);
    }

    render() {  
      return (
          <div className={`finger-node--component`}>
            <div className={`finger-node--image-container ${this.state.isMute ? 'muted' : ''} ${this.state.isRecording ? 'recording' : ''} ${this.state.isSolo ? 'solo' : ''}`}>
              <img src={require(`../../assets/images/fingers--${this.state.fingerImgIndex}.png`)} />
              <h6 className="finger-node--label">{this.props.name}</h6>
              <div className="finger-node--controls">
                <div className="finger-node--button-group">
                  <div className={`finger-node--control recording ${this.state.isRecording ? 'active' : ''}`} onClick={() => { this.handleRecordingClick(); }}>
                    <p className="finger-node--control-copy">R</p>
                  </div>
                  <div className={`finger-node--control solo ${this.state.isSolo ? 'active' : ''}`} onClick={() => { this.handleSoloClick(); }}>
                    <p className="finger-node--control-copy">S</p>
                  </div>
                  <div className={`finger-node--control mute ${this.state.isMute ? 'active' : ''}`} onClick={() => { this.handleMuteClick(); }}>
                    <p className="finger-node--control-copy">M</p>
                  </div>
                </div>
                <div className={`finger-node--in-act ${this.state.isTapping ? 'tapping' : ''} ${this.state.isRecording ? 'recording' : ''}`} onClick={() => { this.tapFinger() }}></div>
              </div>
            </div>
          </div>
      );
    }
}

// Class Prop
FingerNode.propTypes = {
};