import {combineReducers} from 'redux'
import filterReducer from './filter-reducer'
import sensorReducer from './sensor-reducer'

export default combineReducers ({
  filterReducer,
  sensorReducer
  })