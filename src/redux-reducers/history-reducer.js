import { HISTORY_FETCH, HISTORY_SUCCESS, HISTORY_FAILURE} from '../redux-actions/history-actions'

const initialState = {
    history : [],
    isFetching: false,
    error: ''
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case HISTORY_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case HISTORY_SUCCESS:
            console.log(action.payload)
          return {
            ...state,
            isFetching: false,
            error: '',
            history: action.payload
          };
        case HISTORY_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default historyReducer;