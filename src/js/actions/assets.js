import fetch from 'isomorphic-fetch'
import urls from './urls'

export const REQUEST_ASSETS = 'REQUEST_ASSETS'
export const REQUEST_ASSETS_SUCCESS = 'REQUEST_ASSETS_SUCCESS'
export const REQUEST_ASSETS_ERROR = 'REQUEST_ASSETS_ERROR'
export const RESET_ASSETS = 'RESET_ASSETS'

export const REMOVE_ASSET = 'REMOVE_ASSET'

/**
 * request Assets action
 *
 * @returns {Object}  action object
 */
export function requestAssets(){
  return {
    type: REQUEST_ASSETS
  }
}

/**
 * request Assets succes action
 *
 * @param {Object[]}  Assets
 * @returns {Object}  action object
 */
export function requestAssetsSuccess(payload){
  return {
    type: REQUEST_ASSETS_SUCCESS,
    payload
  }
}

/**
 * request Assets error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function requestAssetsError(payload){
  return {
    type: REQUEST_ASSETS_ERROR,
    payload
  }
}

/**
 * removes an asset
 *
 * @param {String}  asset id
 * @returns {Object}  action object
 */
export function removeAsset(payload){
  return {
    type: REMOVE_ASSET,
    payload
  }
}

/**
 * request the asset removal to the API
 *
 * @param {String}  asset id
 * @returns {object}  action object
 */
export function requestRemoveAsset(payload){
  return function (dispatch) {
    dispatch(removeAsset(payload))
    return fetch(`${urls.ROOT_URL}/assets/${payload}`, { method: 'DELETE' })
  }
}

/**
 * fetch categories action
 *
 * @returns {object}  action object
 */
export function fetchAssets(){
  return function (dispatch) {
    dispatch(requestAssets())
    return fetch(`${urls.ROOT_URL}/assets`)
      .then(response => response.json())
      .then(json => {
        dispatch(requestAssetsSuccess(json))
      })
      .catch(error => {
        dispatch(requestAssetsError(error))
      })
  }
}
