import React, { Component } from 'react';

class MusicPlayerPreview extends Component {
  constructor(props, context) {
    super(props, context);
    this.songCliked = this.songCliked.bind(this);
  }

  songCliked() {
    // this.props.history.push(`/musicRooms/${this.props.room._id}`)
  }

  render() {
    return (
      <li onClick={this.songCliked}>
        Song Name: {this.props.song.name}
      </li>
    )
  }
}

export default MusicPlayerPreview;