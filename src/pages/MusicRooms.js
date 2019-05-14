import React, { Component } from 'react';
import { connect } from 'react-redux';

import MusicRoomsFilter from '../cmps/MusicRoomsFilter';
import MusicRoomsList from '../cmps/MusicRoomsList';

import actions from '../store/actions';

class MusicRooms extends Component {
  constructor(props, context) {
    super(props, context);
    this.filterRooms = this.filterRooms.bind(this);
  }

  state = {
    roomsToShow: null,
    Filter: ''
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.getRooms();
  }

  filterRooms(searchWords) {
    console.log('filter text:', searchWords);
    if (searchWords) {
      const filterdRooms = this.props.rooms.filter(room =>
        room.owner.toLowerCase().includes(searchWords.toLowerCase()))
      this.setState({ roomsToShow: filterdRooms, Filter: searchWords })
    } else {
      this.setState({ roomsToShow: this.props.rooms })
    }
  }

  render() {
    return (
      <section className="music-rooms">
        <MusicRoomsFilter onFilter={this.filterRooms} />
        {(this.state.roomsToShow || this.props.rooms) &&
          <MusicRoomsList musicRooms={this.state.roomsToShow || this.props.rooms} />
        }
      </section>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    rooms: state.roomsStore.rooms
  }
}

export default connect(mapStateToProps, actions)(MusicRooms);