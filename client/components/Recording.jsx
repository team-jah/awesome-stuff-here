import React, { Component } from 'react';
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom';


class Recording extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      recording: false,
    }
  }

  startRecording() {
    if (this.state.recording) {
      this.setState({finished: true});
      mediaRecorder.stop();
      return;
    }
    this.setState({ recording: true});
    let options = {mimeType: 'video/webm;codecs=vp9'};
    mediaRecorder = new MediaRecorder(window.stream, options);    
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.log(options.mimeType + ' is not Supported');
      options = {mimeType: 'video/webm;codecs=vp8'};
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(options.mimeType + ' is not Supported');
          options = {mimeType: ''};
        }
      }
    }
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);

    mediaRecorder.ondataavailable = function(event) {
      if (event.data && event.data.size > 0) {
        buffer.push(event.data); 
      }
    }
    mediaRecorder.start(10);
  }

  handleSuccess(stream) {
    document.querySelector('video#candidate-screen').srcObject = stream;
    window.stream = stream;
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    }).
    then(this.handleSuccess);
  }

  render() {
    return(
      <div id="screen" className="row">
        <div className="col-md-10">
          <div className="text-description">
            <h4 className="light-text" align="center">Tell me about your experience with Node.js</h4>
          </div>
          <div className="center">
            <video id="candidate-screen" autoPlay muted></video>
          </div>
          <div className="center">
            <Button onClick={this.startRecording.bind(this)}>{(!this.state.recording) ? 'Record*' : (!this.state.finished) ? 'Stop Recording' : <Link to="/sent">Send Interview</Link>}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Recording;