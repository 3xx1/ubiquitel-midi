import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContainer } from './style'

class Button extends Component {
  render() {
    return (
      <ButtonContainer onClick={this.props.onClick} >
        <FontAwesomeIcon icon={this.props.icon} size='2x' />
      </ButtonContainer >
    );
  }
};

export default Button