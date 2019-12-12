import { FILTER_FETCH, FILTER_SUCCESS, FILTER_FAILURE} from '../redux-actions/filter-actions'

const initialState = {
    filter : [],
    isFetching: false,
    error: ''
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FILTER_SUCCESS:
            console.log(action.payload)
          return {
            ...state,
            isFetching: false,
            error: '',
            filter: action.payload
          };
        case FILTER_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default filterReducer;