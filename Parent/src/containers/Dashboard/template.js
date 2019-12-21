// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

// Class
export default class Dashboard extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container__dashboard">
        <p>Dashboard</p>
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};