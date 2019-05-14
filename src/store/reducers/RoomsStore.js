export default (state, action) => {
  var copy = {};
  if (!state) {
    if (action.payload) {
      copy.rooms = (action.payload.rooms) ? action.payload.rooms : [];
      copy.currRoom = (action.payload.currRoom) ? action.payload.currRoom : null;
    }
  } else {
    if (!state.rooms) {
      copy.rooms = (action.payload.rooms) ? action.payload.rooms : null;
    } else {
      copy.rooms = [...state.rooms];
    }
    if (!state.currRoom) {
      copy.currRoom = (action.payload.currRoom) ? action.payload.currRoom : null;
    } else {
      copy.currRoom = { ...state.currRoom };
    }
  }
  console.log('reducer: ROOMS state-copy: ', copy, ", action.type: ", action)

  switch (action.type) {
    case 'getOneRoom':
      copy.currRoom = action.payload.currRoom;
      return copy;
    default:
      return copy;
  }
}