import {
  REQUEST_ASSETS,
  REQUEST_ASSETS_SUCCESS,
  REQUEST_ASSETS_ERROR,
  REMOVE_ASSET,
  EDIT_ASSET,
  EDITTING_ASSET_SAVE,
  EDITTING_ASSET_CANCEL,
  EDITTING_ASSET_UPDATE } from '../actions/assets'

const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false,
  editting: {
    openModal: false,
    asset: {
      link: '',
      text: ''
    }
  }
}

export default function assets(state = INITIAL_STATE, action){

  switch (action.type) {
    case REQUEST_ASSETS:
      return {
        ...state,
        list: [],
        error: null,
        loading: true
      }
    case REQUEST_ASSETS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
        loading: false
      }
    case REQUEST_ASSETS_ERROR:
      return {
        ...state,
        list: [],
        error: action.payload.message,
        loading: false
      }
    case REMOVE_ASSET:
      return {
        ...state,
        list: state.list.filter(item => item._id !== action.payload)
      }
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
