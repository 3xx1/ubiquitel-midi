import {
  FINGER_CONTROL__SEND
} from './constants';

const initialState = {
  
};

function FingerControlReducer(state = initialState, action) {
  switch(action.type) {
    case FINGER_CONTROL__SEND:
      return {
        ...state
      };
    
    default:
      return state;
  }
}

export default FingerControlReducer;
