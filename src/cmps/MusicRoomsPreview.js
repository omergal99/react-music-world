import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MusicRoomsPreview extends Component {
  constructor(props, context) {
    super(props, context);
    this.roomCliked = this.roomCliked.bind(this);
  }

  roomCliked() {
    this.props.history.push(`/musicRooms/${this.props.room._id}`)
  }

  render() {
    return (
      <li onClick={this.roomCliked}>
        id: {this.props.room._id}<br />
        owner: {this.props.room.owner}
      </li>
    )
  }
}

export default withRouter(MusicRoomsPreview);