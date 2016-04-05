import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
export const RESET_CATEGORIES = 'RESET_CATEGORIES'

const ROOT_URL = 'http://link-bot.herokuapp.com/api'

/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function fetchCategories(){
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}`
  })

  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

/**
 * fetch categories succes action
 *
 * @param {object[]}  posts
 * @returns {object}  action object
 */
export function fetchCategoriesSuccess(posts){
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: posts
  }
}

/**
 * fetch categories error action
 *
 * @param {object[]}  error
 * @returns {object}  action object
 */
export function fetchCategoriesError(error){
  return {
    type: FETCH_CATEGORIES_ERROR,
    payload: error
  }
}
