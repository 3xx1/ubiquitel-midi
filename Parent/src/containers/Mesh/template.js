// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import FingerNode from '../../components/FingerNode';

// Data
import fingerData from '../../assets/finger-data';

// Styles
import './style.scss';

// Class
export default class Mesh extends React.PureComponent {
  constructor(props) {
    super(props);
    this.reactRefs = [];
    this.state = {
      mute: [],
      solo: [],
      recording: []
    }
  }

  updateIsRecording(obj) {
    this.setState({
      ...this.state,
      recording: this.state.recording.find(d => d.id === obj.id) ? this.state.recording.filter(d => d.id !== obj.id) : [...this.state.recording, obj]
    });
    // this.props.updateRecordingState(this.state.recording);
  }

  updateIsMute(obj) {
    this.setState({
      ...this.state,
      mute: this.state.mute.find(d => d.id === obj.id) ? this.state.mute.filter(d => d.id !== obj.id) : [...this.state.mute, obj]
    });
    this.props.updateMuteState(obj);
  }

  updateIsSolo(obj) {
    this.setState({
      ...this.state,
      solo: this.state.solo.find(d => d.id === obj.id) ? this.state.solo.filter(d => d.id !== obj.id) : [...this.state.solo, obj]
    });
    this.props.updateSoloState(obj);
  }

  componentDidMount() {
  }

  render() {
    const self = this;
    if (this.props.lastTappedId) {
      const target = this.reactRefs.find((ref) => { return ref.id === this.props.lastTappedId });
      if (target) {
        target.ref.current.tapFinger();
        setTimeout(() => { this.props.clearLastTappedId(); }, 300);
      }
    }

    return (
      <div>
        <div className="controls">
          <button className="control--button backward" onClick={() => { this.props.onPauseBackwardClicked({ isPlaying: this.props.isPlaying }) }}>
            <img src={this.props.isPlaying ? require(`../../assets/images/icon--stop.svg`) : require(`../../assets/images/icon--back.svg`)} />
          </button>
          <button className="control--button play" onClick={() => { this.props.onPlayClicked({ fingerData, currentTime: this.props.currentTime, isPlaying: this.props.isPlaying }) }}>
            <img src={require(`../../assets/images/icon--play.svg`)} />
          </button>
          <button className="control--button record" onClick={() => {}}>
            <img src={require(`../../assets/images/icon--record.svg`)} />
          </button>
        </div>
        <div className="container__mesh">
          {this.props.activeSessions && this.props.activeSessions
            .filter((activeSession) => { return activeSession.type === 'child' })
            .map((activeSession) => {
              if (!self.reactRefs.find((ref) => ref.id === activeSession.id)) {
                self.reactRefs = [...self.reactRefs, { id: activeSession.id, ref: React.createRef() }];
              }

              return <FingerNode
                ref={self.reactRefs.find((ref) => ref.id === activeSession.id).ref}
                name={activeSession.id}
                updateIsRecording={(flag) => { this.updateIsRecording({ flag, id: activeSession.id }) }}
                updateIsMute={() => { this.updateIsMute({ flag: !activeSession.isMute, id: activeSession.id }) }}
                updateIsSolo={() => { this.updateIsSolo({ flag: !activeSession.isSolo, id: activeSession.id }) }}
                isMute={activeSession.isMute}
                isSolo={activeSession.isSolo}
                tapFinger={() => { this.props.tapFinger(activeSession.id) }}
              />
            }
          )}
        </div>
      </div>
    );
  }
}

// Class Prop
Mesh.propTypes = {
};