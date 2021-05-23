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
      fingerImgIndex: 0
    }
  }

  tapFinger() {
    const stepMs = 80;
    this.setState({ ...this.state, isTapping: true, fingerImgIndex: 1 });
    setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 2 }) }, stepMs * 1);
    setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 1 }) }, stepMs * 2);
    setTimeout(() => { this.setState({ ...this.state, fingerImgIndex: 0 }) }, stepMs * 3);
    setTimeout(() => { this.setState({ ...this.state, isTapping: false }) }, stepMs * 4);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container__finger-mock">
        <div className="finger-mock__wrapper">
          <img src={require(`../../assets/images/fingers--${this.state.fingerImgIndex}.png`)} />
          <div className="finger-mock__button" onClick={() => { this.tapFinger() }}>Tap</div>
        </div>
      </div>
    );
  }
}

// Class Prop
FingerMock.propTypes = {
};