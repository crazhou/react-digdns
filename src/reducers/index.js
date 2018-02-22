import { combineReducers } from "redux";
import {
  REQUEST_DOMAINS,
  REVEIVE_DOMAINS,
  SHOW_ZONEFILE,
  CLOSE_ZONEFILE,
  SHOW_DELETE_DOMAIN,
  CANCEL_DELETE_DOMAIN,
  REQUEST_DEL_DOMAIN,
  DELETE_DOMAIN_DONE,
  DELETE_DOMAIN_FAIL,
  SET_TOKEN
} from "../actions";

const domains = (state = { isFetching: false, list: [] }, action) => {
  switch (action.type) {
    case REQUEST_DOMAINS:
      return Object.assign({}, state, {
        isFetching: true,
        list: [],
        total: 0
      });
    case REVEIVE_DOMAINS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.domains,
        total: action.total
      });
    default:
      return state;
  }
};

const modalZonefile = (state = { isActive: false, zone_file: "" }, action) => {
  switch (action.type) {
    case SHOW_ZONEFILE:
      return Object.assign({}, state, {
        isActive: true,
        zone_file: action.text
      });
    case CLOSE_ZONEFILE:
      return Object.assign({}, state, {
        isActive: false,
        zone_file: ""
      });
    default:
      return state;
  }
};

const modalDeleteDomain = (state = { isActive: false, domain: "" }, action) => {
  switch (action.type) {
    case SHOW_DELETE_DOMAIN:
      return Object.assign({}, state, {
        isActive: true,
        domain: action.domain
      });
    case CANCEL_DELETE_DOMAIN:
    case DELETE_DOMAIN_DONE:
      return Object.assign({}, state, {
        isActive: false,
        domain: ""
      });
    default:
      return state;
  }
};

const deleteDomain = (
  state = { domain: "", isSuccess: false, isFetching: false },
  action
) => {
  switch (action.type) {
    case REQUEST_DEL_DOMAIN:
      return Object.assign(
        state,
        {},
        {
          isSuccess: false,
          isFetching: true
        }
      );
    case DELETE_DOMAIN_DONE:
      return Object.assign(
        state,
        {},
        {
          isSuccess: true,
          isFetching: false
        }
      );
    case DELETE_DOMAIN_FAIL:
      return Object.assign(
        state,
        {},
        {
          isSuccess: false,
          isFetching: false
        }
      );
    default:
      return state;
  }
};

const token = (state = "", action) => {
  if (action.type === SET_TOKEN) {
    return action.token;
  }
  return state;
};

const rootReducer = combineReducers({
  token,
  domains,
  modalZonefile,
  modalDeleteDomain,
  deleteDomain
});

export default rootReducer;
