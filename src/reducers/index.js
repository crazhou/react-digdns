import { combineReducers } from 'redux'
import {REQUEST_DOMAINS, REVEIVE_DOMAINS, SHOW_ZONEFILE, CLOSE_ZONEFILE} from '../actions/index'


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

const modalZonefile = ( state = { isActive: false, text: ''}, action) => {
    switch(action.type) {
        case SHOW_ZONEFILE:
        return Object.assign({}, state, {
            isActive: true,
            zone_file: action.text
        })
        case CLOSE_ZONEFILE:
            return Object.assign({}, state, {
                isActive: false,
                zone_file: ''
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    domains,
    modalZonefile
})

export default rootReducer