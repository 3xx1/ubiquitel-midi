import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD
} from './constants';

const initialState = {
  isPlaying: false
};

function DAWControlReducer(state = initialState, action) {
  switch(action.type) {
    case DAW_CONTROL__PLAY:
      return {
        ...state,
        isPlaying: true
      };
    
    case DAW_CONTROL__PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    
    case DAW_CONTROL__BACKWARD:
      return {
        ...state
      }
    
    default:
      return state;
  }
}

export default DAWControlReducer;
