import React from 'react';

const MusicRoomsFilter = ({ onFilter }) => (
  <input type="text" placeholder="Search" className="filter"
    onChange={ev => onFilter(ev.target.value)} />
)

export default MusicRoomsFilter;