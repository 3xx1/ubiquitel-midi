import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AudioControlContainer } from './style'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

library.add(fas);

class AudioControl extends Component {
  componentDidMount() {
    console.log(this.props.audioState)
    this.action = this.props.play
  }

  setIconAndAction() {
    if (this.props.audioState === 'PLAY') {
      this.icon = ['fas', 'pause']
      this.action = this.props.pause
    } else {
      this.icon = ['fas', 'play']
      this.action = this.props.play
    }
  }

  render() {
    this.setIconAndAction()
    return (
      <AudioControlContainer>
        <Button onClick={this.props.backward} icon={['fas', 'backward']} />
        <Button onClick={this.action} icon={this.icon} />
      </AudioControlContainer>
    );
  }
};

AudioControl.propTypes = {
  audioState: PropTypes.string,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  backward: PropTypes.func.isRequired
}

export default AudioControl