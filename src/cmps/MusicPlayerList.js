import React, { Component } from 'react';

import MusicPlayerPreview from './MusicPlayerPreview';

class MusicPlayerList extends Component {
  constructor(props, context) {
    super(props, context);
    this.sendingSong = this.sendingSong.bind(this);
  }
 
  sendingSong(song) {
    this.props.SongClicked(song)
    // this.props.SongClicked(song)
  }

  render() {
    return (
      <ul className="song-list">
        {this.props.songs.map((song, idx) =>
          <MusicPlayerPreview song={song} emitSong={this.sendingSong} key={idx} />)}
      </ul>
    )
  }
}

export default MusicPlayerList;