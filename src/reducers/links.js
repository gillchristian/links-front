import { FETCH_LINKS, FETCH_LINKS_SUCCESS, FETCH_LINKS_ERROR } from '../actions/links'

const INITIAL_STATE = {
  linksList: {
    links: [],
    error: null,
    loading: false
  }
}

export default function links(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_LINKS:
      return {
        ...state,
        linksList: {
          links: [],
          error: null,
          loading: true
        }
      }
      break;
    case FETCH_LINKS_SUCCESS:
      return {
        ...state,
        linksList: {
          links: action.payload,
          error: null,
          loading: false
        }
      }
      break;
    case FETCH_LINKS_ERROR:
      return {
        ...state,
        linksList: {
          links: [],
          error: action.payload.message,
          loading: true
        }
      }
      break;
    default:
      return state
      break;
  }
}
