import React, { Component } from 'react';

class MusicPlayerControls extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  state = {
    isPlaying: false,
    songLength: 300,
  }

  componentDidMount() {
    this._setProgressLength();
    document.addEventListener('keydown', this.keyConteols.bind(this));
  }

  componentWillReceiveProps() {
    this._stopSong();
    this._activeCurrSong();
  }

  componentWillUnmount() {
    this._stopSong();
    document.removeEventListener('keydown', this.keyConteols.bind(this));
  }

  keyConteols(ev) {
    if (ev.keyCode === 38) { // Up Arrow
      if (this.props.currSong.volume <= 0.95) this.props.currSong.volume = (this.props.currSong.volume + (0.05)).toFixed(2);
    }
    if (ev.keyCode === 40) { // Down Arrow
      if (this.props.currSong.volume >= 0.05) this.props.currSong.volume = (this.props.currSong.volume + (-0.05)).toFixed(2);
    }
    if (ev.keyCode === 32) { // Space
      ev.preventDefault();
      this.togglePlay();
    }
    if (ev.keyCode === 37) { // Left Arrow
      if (Number(this.props.currSong.currentTime) - 5 > 0) {
        this.props.currSong.currentTime = this.props.currSong.currentTime - 5;
      }
    }
    if (ev.keyCode === 39) { // Right Arrow
      if (Number(this.props.currSong.currentTime) + 5 < this.state.songLength) {
        this.props.currSong.currentTime = this.props.currSong.currentTime + 5;
      }
    }
  }

  goTo = (ev) => {
    if(!this.state.isPlaying){
      this.togglePlay()
    }
    this.props.currSong.currentTime = ev.target.value;
    ev.target.max = this.props.currSong.duration;
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        this.props.currSong.play();
        this._startProgressInterval();
      } else {
        this.props.currSong.pause();
        clearInterval(this.progressBarInterval);
      }
    });
  }

  _setProgressLength() {
    setTimeout(() => {
      this.setState({ songLength: this.props.currSong.duration })
    }, 200)
  }

  _stopSong() {
    this.props.currSong.pause();
    this.props.currSong.currentTime = 0;
    clearInterval(this.progressBarInterval);
  }

  _activeCurrSong() {
    setTimeout(() => {
      if (this.state.isPlaying) {
        this.props.currSong.play();
        this._startProgressInterval();
      }
    }, 0)
    this._setProgressLength();
  }

  _startProgressInterval() {
    this.progressBarInterval = setInterval(() => {
      if (this.props.currSong.currentTime < this.state.songLength) {
        this.setState({ isPlaying: true })
      } else {
        this.setState({ isPlaying: false })
        clearInterval(this.progressBarInterval);
      }
    }, 500)
  }

  _timeFilter(num) {
    var fixed = Number(num).toFixed();
    var sec = fixed % 60;
    if (sec < 10) sec = '0' + sec;
    var min = Math.floor((fixed / 60));
    if (min < 10) min = '0' + min;
    return `${min}:${sec}`;
  }

  render() {
    var runTime = this._timeFilter(this.props.currSong.currentTime);
    var songLength = this._timeFilter(this.state.songLength)
    return (
      <div className="player flex flex-col space-center">

        <div className="controls flex space-center">
          <button onClick={this.props.prevSong}>|&lt;</button>
          <button onClick={this.togglePlay}>
            {this.state.isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={this.props.nextSong}>&gt;|</button>
        </div>

        <div className="progress">

          <div className="flex space-between">
            <label>{runTime}</label>
            <label>{songLength}</label>
          </div>

          <input type="range" name="points" min="0"
            style={{
              background: `linear-gradient(to right, #ffcf4b 0%,
              #ffcf4b ${(this.props.currSong.currentTime / this.state.songLength) * 100}%,
              gray ${(this.props.currSong.currentTime / this.state.songLength) * 100}%, gray 100%)`
            }}
            max={this.state.songLength ? this.state.songLength : 200}
            value={this.props.currSong.currentTime}
            onChange={this.goTo.bind(this)}
          />

        </div>

      </div>
    )
  }
}

export default MusicPlayerControls;