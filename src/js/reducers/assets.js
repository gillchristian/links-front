import { REQUEST_ASSETS, REQUEST_ASSETS_SUCCESS, REQUEST_ASSETS_ERROR, REMOVE_LINK } from '../actions/assets'

const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false
}

export default function assets(state = INITIAL_STATE, action){

  switch (action.type) {
    case REQUEST_ASSETS:
      return {
        ...state,
        list: [],
        error: null,
        loading: true
      }
    case REQUEST_ASSETS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
        loading: false
      }
    case REQUEST_ASSETS_ERROR:
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
