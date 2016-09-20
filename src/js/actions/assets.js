import fetch from 'isomorphic-fetch'
import urls from './urls'

export const REQUEST_ASSETS = 'REQUEST_ASSETS'
export const REQUEST_ASSETS_SUCCESS = 'REQUEST_ASSETS_SUCCESS'
export const REQUEST_ASSETS_ERROR = 'REQUEST_ASSETS_ERROR'
export const RESET_ASSETS = 'RESET_ASSETS'

export const REMOVE_ASSET = 'REMOVE_ASSET'

export const EDIT_ASSET= 'EDIT_ASSET'
export const EDITTING_ASSET_UPDATE = 'EDITTING_ASSET_UPDATE'
export const EDITTING_ASSET_SAVE = 'EDITTING_ASSET_SAVE'
export const EDITTING_ASSET_CANCEL = 'EDITTING_ASSET_CANCEL'

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
 * open the modal to edit the asset
 *
 * @param {String}  asset's to edit id
 * @returns {object}  action object
 */
export function editAsset(payload){
  return {
    type: EDIT_ASSET,
    payload
  }
}

/**
 * update the values of the asset being editted
 *
 * @param {Object}  updated input values
 * @returns {object}  action object
 */
export function updateEdittingAsset(payload){
  return {
    type: EDITTING_ASSET_UPDATE,
    payload
  }
}

/**
 * save the asset being editted
 *
 * @returns {Object}  action object
 */
export function saveEdittingAsset(){
  return {
    type: EDITTING_ASSET_SAVE
  }
}

/**
 * cancel the asset edition and close the modal
 *
 * @param {Object}  updated input values
 * @returns {Object}  action object
 */
export function cancelEdittingAsset(){
  return {
    type: EDITTING_ASSET_CANCEL
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
