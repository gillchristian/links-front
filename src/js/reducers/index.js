import { combineReducers } from 'redux'
import assets from './assets'
import categories from './categories'
import user from './user'

const rootReducer = combineReducers({ assets, categories, user })

export default rootReducer
