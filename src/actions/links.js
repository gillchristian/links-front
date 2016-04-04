import axios from 'axios';

export const FETCH_LINKS = 'FETCH_LINKS'
export const FETCH_LINKS_SUCCESS = 'FETCH_LINKS_SUCCESS'
export const FETCH_LINKS_ERROR = 'FETCH_LINKS_ERROR'
export const RESET_LINKS = 'RESET_LINKS'

const ROOT_URL = 'http://link-bot.herokuapp.com/api'

/**
 * fetch links action
 *
 * @returns {object}  action object
 */
export function fetchLinks(){
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}`
  })

  return {
    type: FETCH_LINKS,
    payload: request
  }
}

/**
 * fetch links succes action
 *
 * @param {object[]}  posts
 * @returns {object}  action object
 */
export function fetchLinksSuccess(posts){
  return {
    type: FETCH_LINKS_SUCCESS,
    payload: posts
  }
}

/**
 * fetch links error action
 *
 * @param {object[]}  error
 * @returns {object}  action object
 */
export function fetchLinksError(error){
  return {
    type: FETCH_LINKS_ERROR,
    payload: error
  }
}
