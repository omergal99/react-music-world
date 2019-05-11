import React from 'react';

import MusicRoomsPreview from './MusicRoomsPreview';

const MusicRoomsList = ({ musicRooms }) => (
  <ul className="room-list">
    {musicRooms.map((room, idx) => <MusicRoomsPreview room={room}  key={idx} />)}
  </ul>
)

export default MusicRoomsList;