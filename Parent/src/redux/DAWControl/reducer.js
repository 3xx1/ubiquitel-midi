import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD,
  DAW_CONTROL__SET_DATA
} from './constants';

const initialState = {
  isPlaying: false,
  audioDuration: 0,
  zoom: 0
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
    
    case DAW_CONTROL__SET_DATA:
      return {
        ...state,
        audioDuration: action.data.duration || 0
      }
    
    default:
      return state;
  }
}

export default DAWControlReducer;
