import fetch from 'isomorphic-fetch'
import urls from './urls'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const REQUEST_CATEGORIES_SUCCESS = 'REQUEST_CATEGORIES_SUCCESS'
export const REQUEST_CATEGORIES_ERROR = 'REQUEST_CATEGORIES_ERROR'
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES'

/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function requestCategories(){
  return {
    type: REQUEST_CATEGORIES
  }
}

/**
 * fetch categories succes action
 *
 * @param {object[]}  posts
 * @returns {object}  action object
 */
export function requestCategoriesSuccess(payload){
  return {
    type: REQUEST_CATEGORIES_SUCCESS,
    payload
  }
}

/**
 * fetch categories error action
 *
 * @param {object[]}  error
 * @returns {object}  action object
 */
export function requestCategoriesError(payload){
  return {
    type: REQUEST_CATEGORIES_ERROR,
    payload
  }
}

/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function fetchCategories(){
  return function (dispatch) {
    dispatch(requestCategories())
    return fetch(`${urls.ROOT_URL}/categories`)
      .then(response => response.json())
      .then(json => {
        dispatch(requestCategoriesSuccess(json))
      })
      .catch(error => {
        dispatch(requestCategoriesError(error))
      })
  }
}

/**
 * filter displayed categories by input
 *
 * @param {String}  filter value
 * @returns {object}  action object
 */
export function filterCategories(payload){
  return {
    type: FILTER_CATEGORIES,
    payload
  }
}
