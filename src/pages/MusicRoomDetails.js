import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

class MusicRoomDetails extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRoomById(id);
  }

  render() {
    return (
      <div >
        <h1>im details</h1>
        {this.props.currRoom &&
          <div>
            {this.props.currRoom._id}----
            {this.props.currRoom.owner}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    currRoom: state.roomsStore.currRoom
  }
}

export default connect(mapStateToProps, actions)(MusicRoomDetails);
