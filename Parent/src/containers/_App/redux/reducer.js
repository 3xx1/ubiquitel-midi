import {
  UPDATE_INDEX
} from './constants';

const initialState = {
  index: 0
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_INDEX:
      return {
        ...this.state,
        index: action.index
      }
    default:
      return state;
  }
}

export default appReducer;
