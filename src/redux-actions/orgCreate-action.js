import React from 'react'
import AxiosWithAuth from "../components/AxiosWithAuth";

export const CREATE_O_FETCH = "CREATE_O_FETCH";
export const CREATE_O_SUCCESS = "CREATE_O_SUCCESS";
export const CREATE_O_FAILURE = "CREATE_O_FAILURE";

export const createOrg = (orgMember) => dispatch => {
    console.log('localhost:4000/api/orgs',orgMember)
    dispatch({type: CREATE_O_FETCH})

    AxiosWithAuth()
    .post(``, orgMember)
    .then(res =>
        dispatch({type: CREATE_O_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: CREATE_O_FAILURE, payload: err.response}))
}   
