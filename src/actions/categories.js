import fetch from 'isomorphic-fetch'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const REQUEST_CATEGORIES_SUCCESS = 'REQUEST_CATEGORIES_SUCCESS'
export const REQUEST_CATEGORIES_ERROR = 'REQUEST_CATEGORIES_ERROR'

const ROOT_URL = 'http://link-bot.herokuapp.com/api'

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
    return fetch(ROOT_URL)
      .then(response => response.json())
      .then(json => {
        // TODO: add actual endpoint for categories
        const categories = json
          .map(link => link.categories[0])
        const filteredCategories = categories
          .filter((category, pos) => categories.indexOf(category) === pos)
          .map( category => ({name: category}))
        dispatch(requestCategoriesSuccess(filteredCategories))
      })
      .catch(error => {
        dispatch(requestCategoriesError(error))
      })
  }
}
