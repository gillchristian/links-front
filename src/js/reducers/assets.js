import { List, Map } from 'immutable'

import {
  REQUEST_ASSETS,
  REQUEST_ASSETS_SUCCESS,
  REQUEST_ASSETS_ERROR,
  REMOVE_ASSET,
  EDIT_ASSET,
  EDITTING_ASSET_SAVE,
  EDITTING_ASSET_CANCEL,
  EDITTING_ASSET_UPDATE } from '../actions/assets'

const INITIAL_STATE = Map({
  list: List([]),
  error: null,
  loading: false,
  // TODO: improve data structure
  editting: {
    openModal: false,
    asset: {
      link: '',
      text: ''
    }
  }
})

export default function assets(state = INITIAL_STATE, action){

  switch (action.type) {
    case REQUEST_ASSETS:
      return state.set('loading', true)
    case REQUEST_ASSETS_SUCCESS:
      return state
        .set('loading', false)
        .set('list', List(action.payload))
    case REQUEST_ASSETS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload)
    case REMOVE_ASSET:
      const remover = item => item._id !== action.payload
      return state
        .update('list', list => list.filter(remover))
    // TODO: add asset edition
    case EDIT_ASSET:
      const toEdit = state.list
        .find(asset => asset._id === action.payload)
      return {
        ...state,
        editting: {
          openModal: true,
          asset: toEdit,
        }
      }
    case EDITTING_ASSET_UPDATE:
      return {
        ...state,
        editting: {
          ...state.editting,
          asset: {
            ...state.editting.asset,
            text: action.payload.text,
            link: action.payload.link
          },
        }
      }
    case EDITTING_ASSET_CANCEL:
      return {
        ...state,
        editting: {
          openModal: false,
          asset: {
            link: '',
            text: ''
          },
        }
      }
    case EDITTING_ASSET_SAVE:
      // do the asset update here
      const edittedAsset = state.editting.asset
      const updatedList = state.list
        .map(asset => {
          if (asset._id === edittedAsset._id) {
            return {
              ...asset,
              link: edittedAsset.link,
              text: edittedAsset.text
            }
          } else {
            return asset
          }
        })
      return {
        ...state,
        list: updatedList,
        editting: {
          openModal:false,
          asset: {
            text: '',
            link: ''
          },
        }
      }
    default:
      return state
  }
}
