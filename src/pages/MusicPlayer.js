import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';

import MusicPlayerList from '../cmps/MusicPlayerList';
import MusicPlayerControls from '../cmps/MusicPlayerControls';

class MusicPlayer extends Component {

  // constructor() {
  //   super();
  //   this.goTo = this.goTo.bind(this);
  // }

  state = {
    // isPlaying: false,
    // playTime: 0,
    // songLength: 200,
    songs: null,
    currSongName: 'Bruno Mars - Runaway Baby.mp3',
    currSong: new Audio('assets/mp3/Bruno Mars - Runaway Baby.mp3')
  }

  componentDidMount() {
    this.setSongs();
  }

  componentWillUnmount(){
    
  }

  setSongs() {
    const songsName = require.context('../assets/mp3', false, /\.mp3$/).keys();
    var songs = songsName.map(songName => {
      return { name: songName.substring(2), audio: new Audio(`assets/mp3/${songName.substring(2)}`) }
    });
    this.setState({ songs });
  }

  audioUpload(ev) {
    var files = Object.values(ev.target.files);
    if (files && files.length) {
      var multipleSongs = files.map(file => {
        return { name: file.name, audio: new Audio(URL.createObjectURL(file)) }
      })
      var updateSongs = [...multipleSongs, ...this.state.songs];
      this.setState({
        songs: updateSongs, currSongName: files[0].name,
        currSong: new Audio(URL.createObjectURL(files[0]))
      });
    }
  }

  switchSong(selectedSong) {
    this.setState({
      currSongName: selectedSong.name,
      currSong: selectedSong.audio
    });
  }

  prevSong() {
    var currSongIdx = this.state.songs.findIndex(song => song.name === this.state.currSongName);
    if (currSongIdx) {
      this.switchSong(this.state.songs[currSongIdx - 1]);
    } else {
      this.switchSong(this.state.songs[this.state.songs.length - 1]);
    }
  }

  nextSong() {
    var currSongIdx = this.state.songs.findIndex(song => song.name === this.state.currSongName);
    if (this.state.songs.length - 1 === currSongIdx) {
      this.switchSong(this.state.songs[0]);
    } else {
      this.switchSong(this.state.songs[currSongIdx + 1]);
    }
  }

  render() {
    return (
      <section className="music-player">
        <div className="deatails flex flex-col space-center align-center">

          <div className="title">
            <img src="assets/img/icons/Music-App.png" alt="Song" />
            <span>{this.state.currSongName}</span>
          </div>

          {this.state.songs &&
            <MusicPlayerList songs={this.state.songs}
              SongClicked={this.switchSong.bind(this)}
            />
          }
          <div className="upload-file flex wrap space-center">
            <label title="Upload files" htmlFor="upload-files">Upload Files ☁ </label>
            <input id="upload-files" onChange={this.audioUpload.bind(this)} multiple type="file" />

            <label title="Upload Directories" htmlFor="upload-directories">Upload Directories ☁ </label>
            <input id="upload-directories" webkitdirectory="true" mozdirectory="true"
              onChange={this.audioUpload.bind(this)} multiple type="file" />
          </div>
        </div>

        <MusicPlayerControls currSong={this.state.currSong}
          prevSong={this.prevSong.bind(this)}
          nextSong={this.nextSong.bind(this)}
        />

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