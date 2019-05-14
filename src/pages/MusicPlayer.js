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
    songs: [{ name: 'daughtry - home.mp3', audio: new Audio('assets/mp3/daughtry - home.mp3') }],
    currSongName: 'daughtry - home'
  }

  componentDidMount() {
    this.setSongLength();
    document.addEventListener('keydown', this.keyConteols.bind(this));
    // window.addEventListener("keydown", this.keyConteols.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyConteols.bind(this));
    // window.removeEventListener('keydown', this.keyConteols.bind(this));
  }

  keyConteols(ev) {
    // console.log(ev.keyCode);
    // console.log(ev);
    if (ev.keyCode === 32) { // Space
      this.togglePlay();
    }
    if (ev.keyCode === 37) { // Left Arrow
      // this.setState({ playTime: Number(this.state.playTime) - 5 })
    }
    if (ev.keyCode === 39) { // Right Arrow
      // this.setState({ playTime: Number(this.state.playTime) + 5 })
    }
  }

  currSong = new Audio('assets/mp3/daughtry - home.mp3');
  progressBarInterval;

  setSongLength() {
    setTimeout(() => {
      // console.log(this.currSong.duration)
      this.setState({ songLength: this.currSong.duration })
    }, 200)
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        this.currSong.play();
        this.progressBarInterval = setInterval(() => {
          this.setState({ playTime: Number(this.state.playTime) + 1 })
        }, 1000)
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
    if (ev.target.files[0]) {
      var newUrlSong = URL.createObjectURL(ev.target.files[0]);
      // console.log(newUrlSong);
      console.log(ev.target.files[0]);
      clearInterval(this.progressBarInterval);
      this.currSong.pause();
      var copySongs = [{ name: ev.target.files[0].name, audio: new Audio(newUrlSong) }, ...this.state.songs];
      this.setState({
        songs: copySongs,
        playTime: 0,
        isPlaying: false
      })
      this.currSong = new Audio(newUrlSong);
      this.setSongLength();
    }
  }
  
  switchCurrSong(selectedSong){
    // console.log(selectedSong.audio)
    clearInterval(this.progressBarInterval);
    this.currSong.pause();
    this.setState({
      playTime: 0,
      isPlaying: false
    })
    this.currSong = selectedSong.audio;
    this.setSongLength();
  }

  render() {
    return (
      <section className="music-player">
        <div className="deatails flex flex-col space-center align-center">
          <img src="assets/img/icons/Music-App.png" alt="Song" />
          {this.state.songs &&
            <MusicPlayerList songs={this.state.songs} SongClicked={this.switchCurrSong.bind(this)} />
          }
          <input type="file" onChange={this.audioUpload.bind(this)} />
        </div>

        <div className="player flex flex-col space-center">

          <div className="progress">
            <input type="range" name="points" min="0"
              max={this.state.songLength}
              value={this.state.playTime}
              onChange={this.goTo.bind(this)} />
          </div>

          <div className="controls flex space-center">
            <button>&lt;&lt;</button>
            <button onClick={this.togglePlay}>
              {this.state.isPlaying ? 'Pause' : 'Play'}
            </button>
            <button>&gt;&gt;</button>
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