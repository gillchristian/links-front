import { REQUEST_CATEGORIES, REQUEST_CATEGORIES_SUCCESS, REQUEST_CATEGORIES_ERROR, FILTER_CATEGORIES } from '../actions/categories'

const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false,
  filterValue: ''
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
    case FILTER_CATEGORIES:
      return {
        ...state,
        filterValue: action.payload
      }
      break
    default:
      return state
      break
  }
}
