import fetch from 'isomorphic-fetch'

export const REQUEST_LINKS = 'REQUEST_LINKS'
export const REQUEST_LINKS_SUCCESS = 'REQUEST_LINKS_SUCCESS'
export const REQUEST_LINKS_ERROR = 'REQUEST_LINKS_ERROR'
export const RESET_LINKS = 'RESET_LINKS'

const ROOT_URL = 'http://link-bot.herokuapp.com/api'

/**
 * request links action
 *
 * @returns {Object}  action object
 */
export function requestLinks(){
  return {
    type: REQUEST_LINKS
  }
}

/**
 * request links succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function requestLinksSuccess(payload){
  console.log(payload.length)
  return {
    type: REQUEST_LINKS_SUCCESS,
    payload
  }
}

/**
 * request links error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function requestLinksError(payload){
  return {
    type: REQUEST_LINKS_ERROR,
    payload
  }
}


/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function fetchLinks(){
  return function (dispatch) {
    dispatch(requestLinks())
    return fetch('http://link-bot.herokuapp.com/api')
      .then(response => response.json())
      .then(json => {
        dispatch(requestLinksSuccess(json))
      })
      .catch(error => {
        dispatch(requestLinksError(error))
      })
  }
}
