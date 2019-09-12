import React, { Component } from 'react';

class MusicPlayerPreview extends Component {
  constructor(props, context) {
    super(props, context);
    this.songClicked = this.songClicked.bind(this);
  }

  songClicked() {
    this.props.emitSong(this.props.song);
  }

  render() {
    var isCurrSong = this.props.currSongName === this.props.song.name;
    return (
      <li className={isCurrSong ? 'selected' : '' } onClick={this.songClicked}>
        {this.props.song.name}
      </li>
    )
  }
}

export default MusicPlayerPreview;