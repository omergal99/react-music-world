import React from 'react';

import MusicPlayerPreview from './MusicPlayerPreview';

const MusicPlayerList = ({ songs }) => (
  <ul className="song-list">
    {songs.map((song, idx) => <MusicPlayerPreview song={song}  key={idx} />)}
  </ul>
)

export default MusicPlayerList;