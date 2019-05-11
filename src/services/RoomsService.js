import musicRooms from './data/musicRooms.json';

function getRooms() {
    return Promise.resolve(musicRooms);
}

export default {
    getRooms,
}
