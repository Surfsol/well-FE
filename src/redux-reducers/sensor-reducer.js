import { SENSOR_FETCH, SENSOR_SUCCESS, SENSOR_FAILURE} from '../redux-actions/sensor-actions'

const initialState = {
    sensors : [],
    isFetching: false,
    error: ''
}

const sensorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENSOR_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case SENSOR_SUCCESS:
            console.log(action.payload)
          return {
            ...state,
            isFetching: false,
            error: '',
            sensors: action.payload
          };
        case SENSOR_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default sensorReducer;