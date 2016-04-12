import 'es6-promise'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
