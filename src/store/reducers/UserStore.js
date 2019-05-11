export default (state = { currUser: 'user2' }, action) => {
    console.log('reducer: USER state: ', state, ", action.type: ", action)

    var payloadUser = (action.payload) ? { currUser: action.payload.user } : { currUser: 'user3' };

    switch (action.type) {
        case 'setUser':
            return payloadUser;
        default:
            return state;
    }
}

