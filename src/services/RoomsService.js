import musicRooms from './data/musicRooms.json';

function getRooms() {
    return Promise.resolve(musicRooms.rooms);
}

function getRoomById(id) {
    const room = musicRooms.rooms.find((room) => room._id === id)
    return Promise.resolve(room);
}

export default {
    getRooms,
    getRoomById
}
