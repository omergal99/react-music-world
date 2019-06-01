import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';

import MusicPlayerList from '../cmps/MusicPlayerList';

class MusicPlayer extends Component {

  // constructor() {
  //   super();
  //   this.goTo = this.goTo.bind(this);
  // }

  state = {
    isPlaying: false,
    playTime: 0,
    songLength: 200,
    songs: [{ name: 'daughtry - home.mp3', audio: new Audio('assets/mp3/daughtry - home.mp3') },
    { name: 'משה פרץ - אם זאת מלחמה - moshe perez - em zot milhama.mp3', audio: new Audio('assets/mp3/משה פרץ - אם זאת מלחמה - moshe perez - em zot milhama.mp3') }],
    currSongName: 'משה פרץ - אם זאת מלחמה - moshe perez - em zot milhama.mp3'
  }

  currSong = new Audio('assets/mp3/משה פרץ - אם זאת מלחמה - moshe perez - em zot milhama.mp3');
  progressBarInterval;

  componentDidMount() {
    this._setProgressLength();
    document.addEventListener('keydown', this.keyConteols.bind(this));
    // window.addEventListener("keydown", this.keyConteols.bind(this));

    const songsName = this.importAll(require.context('../assets/mp3', false, /\.mp3$/));
    var songsAudio = songsName.map(songName => {
      var cutName = songName.substring(2);
      return { name: cutName, audio: new Audio(`assets/mp3/${cutName}`) }
    });
    this.setState({ songs: songsAudio })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyConteols.bind(this));
    // window.removeEventListener('keydown', this.keyConteols.bind(this));
  }

  importAll(req) {
    // return req.keys().map(req);
    return req.keys();
  }

  keyConteols(ev) {
    // console.log(ev.keyCode);
    // console.log(ev);
    if (ev.keyCode === 38) { // Up Arrow
      if (this.currSong.volume <= 0.95) this.currSong.volume = (this.currSong.volume + (0.05)).toFixed(2);
    }
    if (ev.keyCode === 40) { // Down Arrow
      if (this.currSong.volume >= 0.05) this.currSong.volume = (this.currSong.volume + (-0.05)).toFixed(2);
    }
    if (ev.keyCode === 32) { // Space
      ev.preventDefault();
      this.togglePlay();
    }
    if (ev.keyCode === 37) { // Left Arrow
      this.setState({ playTime: Number(this.state.playTime) - 5 });
      this.currSong.currentTime = this.currSong.currentTime - 5;
    }
    if (ev.keyCode === 39) { // Right Arrow
      this.setState({ playTime: Number(this.state.playTime) + 5 });
      this.currSong.currentTime = this.currSong.currentTime + 5;
    }
  }

  _setProgressLength() {
    // this.currSong.loop = true;
    setTimeout(() => {
      // console.log(this.currSong.duration)
      this.setState({ songLength: this.currSong.duration })
    }, 200)
  }

  _stopSong() {
    this.currSong.pause();
    this.currSong.currentTime = 0;
    clearInterval(this.progressBarInterval);
    this.setState({ playTime: 0 });
  }

  _startProgressInterval() {
    this.progressBarInterval = setInterval(() => {
      if (this.currSong.currentTime < this.state.songLength) {
        this.setState({ playTime: Number(this.state.playTime) + 1 })
      } else {
        clearInterval(this.progressBarInterval);
        this.setState({ playTime: 0, isPlaying: false })
      }
    }, 1000)
  }

  _activeCurrSong() {
    setTimeout(() => {
      if (this.state.isPlaying) {
        this.currSong.play();
        this._startProgressInterval();
      }
    }, 200);
    this._setProgressLength();
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        // console.log('currentTime: ', this.currSong.currentTime)
        // console.log('duration: ', this.currSong.duration)
        this.currSong.play();
        this._startProgressInterval();
      } else {
        this.currSong.pause();
        clearInterval(this.progressBarInterval);
      }
    });
  }

  goTo = (ev) => {
    // console.log(ev.target)
    // console.log(ev.target.value)
    this.setState({ playTime: ev.target.value })
    this.currSong.currentTime = ev.target.value;
    ev.target.max = this.currSong.duration;
  }

  audioUpload(ev) {
    var files = Object.values(ev.target.files);
    if (files && files.length) {
      // ARRANGE AND STOP PREVIOUS SONG
      this._stopSong();

      var multipleSongs = files.map(file => {
        var urlSong = URL.createObjectURL(file);
        return { name: file.name, audio: new Audio(urlSong) }
      })
      var updateSongs = [...multipleSongs, ...this.state.songs];

      this.setState({
        songs: updateSongs,
        currSongName: files[0].name
      });

      // SET NEW SONG
      this.currSong = new Audio(URL.createObjectURL(files[0]));
      this._activeCurrSong();
    }
  }

  newSongSelected(selectedSong) {
    this._stopSong();

    this.setState({
      currSongName: selectedSong.name
    });

    this.currSong = selectedSong.audio;
    this._activeCurrSong();
  }

  prevSong() {
    this._stopSong();

  }

  nextSong() {
    this._stopSong();

  }

  render() {
    return (
      <section className="music-player">
        <div className="deatails flex flex-col space-center align-center">
          <img src="assets/img/icons/Music-App.png" alt="Song" />
          {this.state.currSongName}
          {this.state.songs &&
            <MusicPlayerList songs={this.state.songs} SongClicked={this.newSongSelected.bind(this)} />
          }
          <input type="file" multiple
            onChange={this.audioUpload.bind(this)} />
          <br />
          <input type="file" webkitdirectory="true" mozdirectory="true"
            onChange={this.audioUpload.bind(this)} />
        </div>

        <div className="player flex flex-col space-center">

          <div className="progress">
            <input type="range" name="points" min="0"
              style={{
                background: `linear-gradient(to right, #53cfd8 0%,
                  #53cfd8 ${(this.state.playTime / this.state.songLength) * 100}%,
                  #fcf6f6 ${(this.state.playTime / this.state.songLength) * 100}%, #fcf6f6 100%)`
              }}
              max={this.state.songLength ? this.state.songLength : 200}
              value={this.state.playTime}
              onChange={this.goTo.bind(this)} />
          </div>
          {this.state.playTime}

          <div className="controls flex space-center">
            <button onClick={this.prevSong}>|&lt;</button>{/* |< */}
            <button>&lt;&lt;</button>{/* << */}
            <button onClick={this.togglePlay}>
              {this.state.isPlaying ? 'Pause' : 'Play'}
            </button>
            <button>&gt;&gt;</button>{/* >> */}
            <button onClick={this.nextSong}>&gt;|</button>{/* >| */}
          </div>

        </div>
      </section>
    )
  }
}

export default MusicPlayer;

// myaudio.play(); - This will play the music.
// myaudio.pause(); - This will stop the music.
// myaudio.duration; - Returns the length of the music track.
// myaudio.currentTime = 0; - This will rewind the audio to the beginning.
// myaudio.loop = true; - This will make the audio track loop.
// myaudio.muted = true; - This will mute the track