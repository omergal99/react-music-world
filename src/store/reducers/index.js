import RoomsStore from './RoomsStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    roomsStore: RoomsStore,
    userStore: UserStore
});

export default rootReducer;