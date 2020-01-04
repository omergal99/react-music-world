import React, { Component } from 'react';

class MusicPlayerControls extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  state = {
    isPlaying: false,
    songLength: 300,
    updateBar: true,
    isGoToavailable: true
  }

  mapKeyborads = {};
  mapDoubleKey = {};


  componentDidMount() {
    this._setProgressLength();
    clearInterval(this.progressBarInterval);
    document.addEventListener('keydown', this.keyConteols.bind(this));
    document.addEventListener('keyup', this.keyConteols.bind(this));
  }

  componentWillReceiveProps() {
    // console.log(nextProps.currSong)
    // console.log(this.props.currSong)
    // console.log(this.props.finishLoad)
    this._stopSong();
    this._setProgressLength();
    this._activeCurrSong();
  }

  componentWillUnmount() {
    this._stopSong();
    document.removeEventListener('keydown', this.keyConteols.bind(this));
    document.removeEventListener('keyup', this.keyConteols.bind(this));
    if (this.progressLengthTimeout) {
      clearTimeout(this.progressLengthTimeout);
      this.progressLengthTimeout = 0;
    }
    if (this.activeCurrSongTimeout) {
      clearTimeout(this.activeCurrSongTimeout);
      this.activeCurrSongTimeout = 0;
      clearInterval(this.progressBarInterval);
    }
  }

  keyConteols(ev) {
    const keyCode = ev.keyCode;
    const iskeyDown = ev.type === 'keydown';
    this.mapKeyborads[keyCode] = ev.type === 'keydown';
    // if (this.mapKeyborads[78] && this.mapKeyborads[71]) { // 'N' + 'G'
    //   this.props.nextSong();
    // }
    if (iskeyDown) {
      if (this.mapDoubleKey[keyCode]) {
        this.mapDoubleKey[keyCode] += 1;
        if (this.mapDoubleKey[78] >= 2) { // Double Key 'N'
          this.mapDoubleKey[78] = 0;
          this.props.nextSong();
        }
      }
      else {
        this.mapDoubleKey[keyCode] = 1;
      }
      setTimeout(() => {
        this.mapDoubleKey[keyCode] = 0;
      }, 400)

      if (keyCode === 38) { // Up Arrow
        if (this.props.currSong.volume <= 0.95) this.props.currSong.volume = (this.props.currSong.volume + (0.05)).toFixed(2);
      }
      if (keyCode === 40) { // Down Arrow
        if (this.props.currSong.volume >= 0.05) this.props.currSong.volume = (this.props.currSong.volume + (-0.05)).toFixed(2);
      }
      if (keyCode === 32) { // Space
        ev.preventDefault();
        this.togglePlay();
      }
      if (keyCode === 37) { // Left Arrow
        if (Number(this.props.currSong.currentTime) - 5 > 0) {
          this.props.currSong.currentTime = this.props.currSong.currentTime - 5;
        }
      }
      if (keyCode === 39) { // Right Arrow
        if (Number(this.props.currSong.currentTime) < this.state.songLength) {
          this.props.currSong.currentTime = this.props.currSong.currentTime + 5;
        }
      }
    }
  }

  goTo = (ev) => {
    // ev.stopPropagation();
    // ev.preventDefault();
    if (this.state.isGoToavailable) {
      // console.log(this.props.currSong.currentTime)
      // console.log(ev.target.value)
      this.setState({ isGoToavailable: false })
      if (!this.state.isPlaying) {
        this.togglePlay()
      }
      this.props.currSong.currentTime = ev.target.value;
      setTimeout(() => { this.setState({ isGoToavailable: true }) }, 100)
    }
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        this._playAndInterval();
      } else {
        this.props.currSong.pause();
        clearInterval(this.progressBarInterval);
      }
    });
  }

  _stopSong() {
    this.props.currSong.pause();
    if (this.props.finishLoad) {
      this.props.currSong.currentTime = 0;
    }
    clearInterval(this.progressBarInterval);
  }

  _playAndInterval = () => {
    this.props.currSong.play();
    this._startProgressInterval();
  }

  _setProgressLength() {
    this.progressLengthTimeout = setTimeout(() => {
      if (this.props.currSong.duration) {
        this.setState({ songLength: this.props.currSong.duration })
      } else {
        this._setProgressLength()
      }
    }, 100)
  }

  _activeCurrSong() {
    this.activeCurrSongTimeout = setTimeout(() => {
      if (this.props.currSong.readyState >= 2) {
        if (this.state.isPlaying) {
          this._playAndInterval();
        }
      } else {
        this._activeCurrSong()
      }
    }, 200)
  }

  _startProgressInterval() {
    this.progressBarInterval = setInterval(() => {
      if (this.props.currSong.currentTime < this.state.songLength) {
        this.setState({ updateBar: true })
      } else {
        this.props.nextSong();
        clearInterval(this.progressBarInterval);
      }
    }, 10)
  }

  _timeDisplay(num) {
    var fixed = Number(num).toFixed();
    var sec = fixed % 60;
    if (sec < 10) sec = '0' + sec;
    var min = Math.floor((fixed / 60));
    if (min < 10) min = '0' + min;
    return `${min}:${sec}`;
  }

  render() {
    var songLength = this.state.songLength ? this.state.songLength : 200;
    var runTime = this._timeDisplay(this.props.currSong.currentTime);
    var endTime = this._timeDisplay(songLength);
    var step = (songLength / 50) * 0.01;
    return (
      <div className="player flex flex-col space-center">

        <div className="controls flex space-center">
          <button onClick={this.props.prevSong}>&lt;&lt;</button>
          <button onClick={this.togglePlay} style={{ padding: this.state.isPlaying ? '0px 0px 2px 1px' : '2px 0px 0px 4px' }}>
            {this.state.isPlaying ? '❚❚' : '▶'}
          </button>
          <button onClick={this.props.nextSong}>&gt;&gt;</button>
        </div>

        <div className="progress">

          <div className="time flex space-between">
            <label>{runTime}</label>
            <label>{endTime}</label>
          </div>

          <input type="range" name="points" min="0" step={step}
            style={{
              background: `linear-gradient(to right, #ffcf4b 0%,
              #ffcf4b ${(this.props.currSong.currentTime / songLength) * 100}%,
              gray ${(this.props.currSong.currentTime / songLength) * 100}%, gray 100%)`
            }}
            max={songLength ? songLength : 200}
            value={this.props.currSong.currentTime}
            onInput={this.goTo.bind(this)}
            onChange={this.goTo.bind(this)}
          />

        </div>

      </div>
    )
  }
}

export default MusicPlayerControls;