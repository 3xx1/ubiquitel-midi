import { connect } from 'react-redux'
import Waveform from './components'

const mapStateToProps = state => ({
  audioState: state.audioControl
})

export default connect(mapStateToProps, null)(Waveform)
