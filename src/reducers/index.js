import { combineReducers } from 'redux'
import {REQUEST_DOMAINS, REVEIVE_DOMAINS} from '../actions/index'


const domains = (state = { isFetching: false, list: []}, action) => {
    switch(action.type) {
        case REQUEST_DOMAINS:
            return Object.assign({}, state, {
                isFetching : true,
                list : [],
                total: 0
            });
        case REVEIVE_DOMAINS:
            return Object.assign({}, state, {
                isFetching: false,
                list: action.domains,
                total : action.total
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    domains
})

export default rootReducer