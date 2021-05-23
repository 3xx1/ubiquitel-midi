import {
  FINGER_CONTROL__SEND,
  FINGER_CONTROL__TAP,
  FINGER_CONTROL__TAP_CLEAR
} from './constants';

const initialState = {
  lastTappedId: ''
};

function FingerControlReducer(state = initialState, action) {
  switch(action.type) {
    case FINGER_CONTROL__SEND:
      return {
        ...state
      };
  
    case FINGER_CONTROL__TAP:
      return {
        ...state,
        lastTappedId: action.id
      };

    case FINGER_CONTROL__TAP_CLEAR:
      return {
        ...state,
        lastTappedId: ''
      };
    
    default:
      return state;
  }
}

export default FingerControlReducer;
