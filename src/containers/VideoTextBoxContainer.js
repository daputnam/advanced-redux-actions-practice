import { connect } from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';
import { setVideoURL } from '../actions'

function mapDispatchToProps(dispatch){
  return {
    set: function(url){
      let action = setVideoURL(url);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(VideoTextBox);
