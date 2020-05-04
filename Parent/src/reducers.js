// Dependencies
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

// Children Reducers
import globalReducer from './containers/_App/redux/reducer';
import DAWControlReducer from './redux/DAWControl/reducer';
import FingerControlReducer from './redux/FingerControl/reducer';

// Initial routing state
const routeInitialState = {
  location: null,
};

// Route Reducer
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    DAWControl: DAWControlReducer,
    FingerControl: FingerControlReducer,
    ...injectedReducers
  });
}
