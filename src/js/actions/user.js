import fetch from 'isomorphic-fetch'
import urls from './urls'

export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS'
export const REQUEST_USER_ERROR = 'REQUEST_USER_ERROR'
export const RESET_LINKS = 'RESET_LINKS'

/**
 * request links action
 *
 * @returns {Object}  action object
 */
export function requestUser(){
  return {
    type: REQUEST_USER
  }
}

/**
 * request links succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function requestUserSuccess(payload){
  return {
    type: REQUEST_USER_SUCCESS,
    payload
  }
}

/**
 * request links error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function requestUserError(payload){
  return {
    type: REQUEST_USER_ERROR,
    payload
  }
}


/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function fetchUser(){
  // --- will do actuall fetch here ---
  return function (dispatch) {
    dispatch(requestUserSuccess({
      name: 'gillchristian',
      teams: ['los-pibes', 'altoros'] // this will have the _id's instead
    }))
  }
}
