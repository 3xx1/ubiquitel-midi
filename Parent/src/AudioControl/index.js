import { connect } from 'react-redux'
import AudioControl from './components'
import { play, pause, backward } from './actions'

const mapStateToProps = state => ({
  audioState: state.audioControl
})

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  backward: () => dispatch(backward()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioControl)
