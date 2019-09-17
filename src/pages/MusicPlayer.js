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
    currSongName: 'Ed Sheeran & Justin Bieber - I Don\'t Care',
    currSong: new Audio('assets/mp3/Ed Sheeran & Justin Bieber - I Don\'t Care.mp3'),
    finishLoad: false
  }

  componentDidMount() {
    this.setSongs();
    this.updatingDuration();

  }

  componentWillUnmount() {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
      this.durationTimeout = 0;
    }
  }

  setSongs() {
    // require.context() - EXPLAIN:
    // FIRST- the directory to match within.
    // SECOND- a boolean flag to include or exclude subdirectories.
    // THIRD- a regular expression to match files against.
    let reg = new RegExp('(.3gp|.ac3|.aiff|.alac.flac|.m4a|.mp3|.oga|.wav)+$');
    const songsName = require.context('../assets/mp3', false, /(\.3gp|\.aac|\.ac3|\.aiff|\.alac\.flac|\.m4a|\.mp3|\.oga|\.wav|\.wma)+$/).keys();
    var songs = songsName.map(songName => {
      return {
        name: songName.substring(2).replace(reg, ''),
        audio: new Audio(`assets/mp3/${songName.substring(2)}`),
        duration: null
      }
    });
    songs.sort(this._sortNames);
    // songs.map(song => {
    //   song.duration = song.audio.duration;
    // });
    // console.log(songs)
    this.setState({ songs });
  }

  audioUpload(ev) {
    var files = Object.values(ev.target.files);
    let reg = new RegExp('(.3gp|.ac3|.aiff|.alac.flac|.m4a|.mp3|.oga|.wav)+$');
    if (files && files.length) {
      // ------------ USE FILTER AND MAP ------------
      // var multipleSongs = files
      //   .filter(file => reg.test(file.name))
      //   .map(file => {
      //     // return { name: file.name.replace(/(\.mp3|\.wma)/g,''), audio: new Audio(URL.createObjectURL(file)) }
      //     return { name: file.name, audio: new Audio(URL.createObjectURL(file)) }
      //   })
      // ------------ USE REDUCE ------------
      var multipleSongs = files.reduce((acc, file) => {
        if (reg.test(file.name)) {
          acc.push({ name: file.name.replace(reg, ''), audio: new Audio(URL.createObjectURL(file)), duration: null });
        }
        return acc;
      }, [])
      // console.log(multipleSongs[0].audio.preload)
      var updateSongs = [...multipleSongs, ...this.state.songs];
      updateSongs.sort(this._sortNames);
      this.setState({
        songs: updateSongs,
        currSongName: files[0].name.replace(reg, ''),
        currSong: new Audio(URL.createObjectURL(files[0]))
      });
      this.updatingDuration();
    }
  }

  _sortNames(a, b) {
    return ((a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
  }

  updatingDuration() {
    this.durationTimeout = setTimeout(() => {
      var count = 0;
      var copySongs = this.state.songs;
      copySongs.map(song => {
        if (song.audio.duration) {
          song.duration = this._timeDisplay(song.audio.duration);
          count++;
        }
        return song;
      });
      // console.log('count', count)
      // console.log('copySongs.length', copySongs.length)
      if (count === copySongs.length) {
        this.setState({ finishLoad: true, songs: copySongs });
        // console.log(copySongs)
      } else {
        this.updatingDuration()
      }
    }, 500)
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
    var copy = [...this.state.songs]
    var revers = copy.reverse(); // for case two songs with same name
    var currSongIdx = revers.findIndex(song => song.name === this.state.currSongName);
    if (currSongIdx) {
      this.switchSong(revers[currSongIdx - 1]);
    } else {
      this.switchSong(revers[revers.length - 1]);
    }
  }

  cleanList() {
    this.setState({ songs: [] });
    this.setState({
      songs: [],
      currSongName: '',
      currSong: new Audio()
    });
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
    return (
      <section className="music-player">
        <div className="deatails flex flex-col space-center align-center">

          <div className="title">
            <img src="assets/img/icons/Music-App.png" alt="Song" />
            <span>{this.state.currSongName}</span>
          </div>

          {this.state.songs &&
            <MusicPlayerList songs={this.state.songs}
              songClicked={this.switchSong.bind(this)}
              currSongName={this.state.currSongName}
            />
          }
          <div className="clear-upload">
            <div className="clean"> <button onClick={this.cleanList.bind(this)}>Claen List</button></div>
            <div className="upload-file">
              <label title="Upload files" htmlFor="upload-files">Upload Files ☁ </label>
              <input id="upload-files" onChange={this.audioUpload.bind(this)} multiple type="file" />

              <label title="Upload Directories" htmlFor="upload-directories">Upload Directories ☁ </label>
              <input id="upload-directories" webkitdirectory="true" mozdirectory="true"
                onChange={this.audioUpload.bind(this)} multiple type="file" />
            </div>
            <div className="some-opt">
              {/* <button>Claen</button> */}
            </div>
          </div>
        </div>

        <MusicPlayerControls currSong={this.state.currSong} finishLoad={this.state.finishLoad}
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