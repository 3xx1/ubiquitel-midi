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
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container__mesh">
        {this.props.activeSessions && this.props.activeSessions
          .filter((activeSession) => { return activeSession.type === 'child' })
          .map((activeSession) => {
            return <FingerNode
              name={activeSession.id}
              updateIsRecording={(flag) => { console.log(flag) }}
              updateIsMute={(flag) => {console.log(flag)}}
              updateIsSolo={(flag) => { console.log(flag) }}
            />
          }
        )}
        {/* <FingerNode
          name={'Finger 0'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        /> */}
      </div>
    );
  }
}

// Class Prop
Mesh.propTypes = {
};