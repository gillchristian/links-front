import { Map, List } from 'immutable'

import {
  REQUEST_CATEGORIES,
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_ERROR,
  FILTER_CATEGORIES } from '../actions/categories'

const INITIAL_STATE = Map({
  list: List([]),
  error: null,
  loading: false,
  filterValue: ''
})

export default function categories(state = INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return state.set('loading', true)
    case REQUEST_CATEGORIES_SUCCESS:
      return state
        .set('loading', false)
        .set('list', List(action.payload))
    case REQUEST_CATEGORIES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload)
    case FILTER_CATEGORIES:
      return state.set('filterValue', action.payload)
    default:
      return state
  }
}
