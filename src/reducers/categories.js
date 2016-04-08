import { REQUEST_CATEGORIES, REQUEST_CATEGORIES_SUCCESS, REQUEST_CATEGORIES_ERROR } from '../actions/categories'

const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false
}

export default function categories(state = INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        list: [],
        error: null,
        loading: true
      }
      break
    case REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
        loading: false
      }
      break
    case REQUEST_CATEGORIES_ERROR:
      return {
        ...state,
        list: [],
        error: action.payload,
        loading: false
      }
      break
    default:
      return state
      break
  }
}
