import React, { Component } from 'react';

class MusicPlayerPreview extends Component {
  constructor(props, context) {
    super(props, context);
    this.songClicked = this.songClicked.bind(this);
  }

  state = {
    duration: null,
  }

  songClicked() {
    this.props.emitSong(this.props.song);
  }

  componentDidMount() {
    // this.props.song.audio.onloadedmetadata = () => this.setState({ duration: this._timeDisplay(this.props.song.audio.duration) });
  }

  render() {
    var isCurrSong = this.props.currSongName === this.props.song.name;
    return (
      <li className={`song ${isCurrSong ? 'selected' : ''}`} onClick={this.songClicked}>
        <span className="name">{this.props.song.name}</span>
        <span className="duration">{this.props.song.duration}</span>
      </li>
    )
  }
}

export default MusicPlayerPreview;