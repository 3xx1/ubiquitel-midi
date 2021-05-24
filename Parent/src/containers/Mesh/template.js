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
      <div className="container__mesh">
        {this.props.activeSessions && this.props.activeSessions
          .filter((activeSession) => { return activeSession.type === 'child' })
          .map((activeSession) => {
            console.log(self.reactRefs, 'refs')
            if (!self.reactRefs.find((ref) => ref.id === activeSession.id)) {
              self.reactRefs = [...self.reactRefs, { id: activeSession.id, ref: React.createRef() }];
            }

            return <FingerNode
              ref={self.reactRefs.find((ref) => ref.id === activeSession.id).ref}
              name={activeSession.id}
              updateIsRecording={(flag) => { console.log(flag) }}
              updateIsMute={(flag) => {console.log(flag)}}
              updateIsSolo={(flag) => { console.log(flag) }}
              tapFinger={() => { this.props.tapFinger(activeSession.id) }}
            />
          }
        )}
      </div>
    );
  }
}

// Class Prop
Mesh.propTypes = {
};