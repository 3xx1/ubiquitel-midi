// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Finger from '../../components/Finger';

// Styles
import './style.scss';

// Class
export default class Dashboard extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container__dashboard">
        <Finger />
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};