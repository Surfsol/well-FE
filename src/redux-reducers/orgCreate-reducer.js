import {CREATE_O_FETCH, CREATE_O_SUCCESS, CREATE_O_FAILURE} from '../redux-actions/orgCreate-action'

const initialState = {
    create : [],
    isFetching: false,
    error: ""
}

const orgCreate = (state = initialState, action) => {
    switch (action.type){
        case CREATE_O_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case CREATE_O_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:'',
                create: action.payload
            }
        case CREATE_O_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default orgCreate