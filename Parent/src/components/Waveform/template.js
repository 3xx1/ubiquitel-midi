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
            <div className="waveform--component">
              <div className="header">
              <p>{this.props.label}</p>
              </div>
              <div className="body">
                waveform display
              </div>
            </div>
        );
    }
}

// Class Prop
Waveform.propTypes = {
};