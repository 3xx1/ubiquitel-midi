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
export default class FingerMock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fingerImgIndex: 0,
      isPlaying: false
    }
  }

  tapFinger() {
    const stepMs = 80;
    if (!this.state.isTapping) {
      this.setState({ ...this.state, isTapping: true, fingerImgIndex: 1 });
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 2 }) }, stepMs * 1);
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 1 }) }, stepMs * 2);
      setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 0 }) }, stepMs * 3);
      setTimeout(() => { this.setState({ ...this.state, isTapping: false }) }, stepMs * 4);
    }
  }

  propagateTapFingerEvent() {
    this.props.tapFinger();
  }

  getIsMute() {
    const sessionIds = this.props.activeSessions.filter((session) => { return session.type === 'child' }).map((session) => { return session.id });
    const muteIds = this.props.activeSessions.filter((session) => { return session.isMute }).map((session) => { return session.id });
    const soloIds = this.props.activeSessions.filter((session) => { return session.isSolo }).map((session) => { return session.id });

    let mutedArray = [];
    if (soloIds.length === 0) {
      mutedArray = muteIds;
    } else {
      mutedArray = [
        ...sessionIds.filter((sessionId) => { return !soloIds.find((soloId) => { return soloId === sessionId }); }),
        ...muteIds
      ]
      mutedArray = mutedArray.filter((id, index) => { return mutedArray.indexOf(id) === index });
    }

    if (mutedArray.find(index => { return index === this.props.id })) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      if (!this.state.isPlaying) {
        this.setState({ isPlaying: true });
        setTimeout(() => { if (!this.getIsMute()) this.tapFinger(); }, 2000);
      };
    } else {
      if (this.state.isPlaying) this.setState({ isPlaying: false });
    }
  }

  render() {
    if (this.props.lastTappedId === this.props.id ) this.tapFinger();
    return (
      <div className="container__finger-mock">
        <div className="finger-mock__wrapper">
          <img className={`${this.getIsMute() ? 'mute' : ''}`} src={require(`../../assets/images/fingers--${this.state.fingerImgIndex}.png`)} />
          <div className="finger-mock__button" onClick={() => { this.tapFinger(); this.propagateTapFingerEvent(); }}>Tap</div>
        </div>
      </div>
    );
  }
}

// Class Prop
FingerMock.propTypes = {
};