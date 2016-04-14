import { combineReducers } from 'redux'
import links from './links'
import categories from './categories'
import user from './user'

const rootReducer = combineReducers({ links, categories, user })

export default rootReducer
