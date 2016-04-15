import fetch from 'isomorphic-fetch'
import urls from './urls'

export const REQUEST_LINKS = 'REQUEST_LINKS'
export const REQUEST_LINKS_SUCCESS = 'REQUEST_LINKS_SUCCESS'
export const REQUEST_LINKS_ERROR = 'REQUEST_LINKS_ERROR'
export const RESET_LINKS = 'RESET_LINKS'

export const REMOVE_LINK = 'REMOVE_LINK'

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
 * removes a link
 *
 * @param {String}  link id
 * @returns {Object}  action object
 */
export function removeLink(payload){
  return {
    type: REMOVE_LINK,
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
    return fetch(`${urls.ROOT_URL}/assets`)
      .then(response => response.json())
      .then(json => {
        dispatch(requestLinksSuccess(json))
      })
      .catch(error => {
        dispatch(requestLinksError(error))
      })
  }
}
