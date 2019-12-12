import {combineReducers} from 'redux'
import filterReducer from './filter-reducer'
import sensorReducer from './sensor-reducer'
import historyReducer from './history-reducer'

export default combineReducers ({
  filterReducer,
  sensorReducer,
  historyReducer
  })