import RoomsService from '../../services/RoomsService';

async function getRooms() {
    const roomsFromService = await RoomsService.getRooms();
    return { type: '', payload: roomsFromService };
}

// function addMsg(txt, from) {
//     return {
//         type: 'pushToMsgs',
//         payload: { txt, from }
//     }
// }

export default {
    getRooms,
    // addMsg,
}