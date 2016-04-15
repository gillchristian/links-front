import { REQUEST_LINKS, REQUEST_LINKS_SUCCESS, REQUEST_LINKS_ERROR, REMOVE_LINK } from '../actions/links'

const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false
}

export default function links(state = INITIAL_STATE, action){

  switch (action.type) {
    case REQUEST_LINKS:
      return {
        ...state,
        list: [],
        error: null,
        loading: true
      }
    case REQUEST_LINKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
        loading: false
      }
    case REQUEST_LINKS_ERROR:
      return {
        ...state,
        list: [],
        error: action.payload.message,
        loading: false
      }
    case REMOVE_LINK:
      const list = state.list
        .filter(item => item._id != action.payload)
      return {
        ...state,
        list
      }
    default:
      return state
  }
}
