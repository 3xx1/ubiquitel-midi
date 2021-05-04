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
        <FingerNode
          name={'Finger 0'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 1'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 2'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 3'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 4'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 5'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 6'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 7'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 8'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 9'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 10'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 11'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 12'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 13'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 14'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 15'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 16'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 17'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 18'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 19'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 20'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 21'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 22'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 23'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 24'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 25'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 26'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
        <FingerNode
          name={'Finger 27'}
          updateIsRecording={(flag) => { console.log(flag) }}
          updateIsMute={(flag) => {console.log(flag)}}
          updateIsSolo={(flag) => { console.log(flag) }}
        />
      </div>
    );
  }
}

// Class Prop
Mesh.propTypes = {
};