import RoomsService from '../../services/RoomsService';

// function getRooms() {
//   return (dispatch) => {
//     RoomsService.getRooms()
//       .then((roomsService) => {
//         if (roomsService && roomsService.length) {
//           dispatch({ type: '', payload: { rooms: roomsService } })
//         } else {
//           dispatch({ type: '' })
//         }
//       })
//   }
// }

function getRooms() {
  return async (dispatch) => {
    const roomsService = await RoomsService.getRooms();
    if (roomsService && roomsService.length) {
      dispatch({ type: '', payload: { rooms: roomsService } });
    } else {
      dispatch({ type: '' });
    }
  }
}

function getRoomById(id) {
  return async (dispatch) => {
    const currRoom = await RoomsService.getRoomById(id);
    dispatch({ type: 'getOneRoom', payload: { currRoom } });
  }
}

export default {
  getRooms,
  getRoomById
}