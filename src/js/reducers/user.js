import { REQUEST_USER, REQUEST_USER_SUCCESS, REQUEST_USER_ERROR, FILTER_CATEGORIES } from '../actions/user'

const INITIAL_STATE = {
  name: '',
  teams: [],
  loading: false,
  error: null
}

export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: true
      }
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        teams: action.payload.teams,
        loading: false,
        error: false
      }
    case REQUEST_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
