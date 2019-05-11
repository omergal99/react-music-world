import React, { Component } from 'react';

import MusicRoomsFilter from '../cmps/MusicRoomsFilter';
import MusicRoomsList from '../cmps/MusicRoomsList';

class MusicRooms extends Component {
  state = {
  }

  componentDidMount() {
  }

  filterRooms (stringToFilter) {
    console.log('filter text:',stringToFilter)
  }

  render() {
    return (
      <section className="music-rooms">
        <MusicRoomsFilter onFilter={this.filterRooms} />
        <MusicRoomsList musicRooms={['lala','mama']} />
      </section>
    )
  }
}

export default MusicRooms;
