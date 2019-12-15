import {combineReducers} from 'redux'
import filterReducer from './filter-reducer'
import sensorReducer from './sensor-reducer'
import historyReducer from './history-reducer'
import loginReducer from './login-reducer'
import orgCreateReducer from './orgCreate-reducer'

export default combineReducers ({
  filterReducer,
  sensorReducer,
  historyReducer,
  loginReducer,
  orgCreateReducer
  })