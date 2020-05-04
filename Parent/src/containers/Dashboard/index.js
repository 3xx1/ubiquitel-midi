import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import Dashboard from './template';

const mapStateToProps = (state) => {
  return {
    isPlaying: state.DAWControl.isPlaying
  }
};

const mapDispatchToProps = (dispatch) => ({
  onPlayPauseClicked: (isPlaying) => {
    isPlaying 
      ? dispatch(DAWControlActions.dawControl__pause())
      : dispatch(DAWControlActions.dawControl__play());
  },
  onBackwardClicked: () => {
    dispatch(DAWControlActions.dawControl__backward());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);