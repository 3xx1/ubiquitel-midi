export default function audioControlReducer(state = 'PAUSE', action) {
  switch (action.type) {
    case 'PLAY':
      return action.type;
    case 'PAUSE':
      return action.type;
    case 'BACKWARD':
      return action.type;
    default:
      return state;
  }
}
