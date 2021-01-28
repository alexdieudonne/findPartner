import { combineReducers } from 'redux'
import locationReducer from './manageLocation'
import manageParam from './manageParam'

export default combineReducers({
    locationReducer,
    manageParam
  })