import React from 'react'
import axiosWithAuth from '../components/AxiosWithAuth';


export const HISTORY_FETCH = 'HISTORY_FETCH';
export const HISTORY_SUCCESS = 'HISTORY_SUCCESS';
export const HISTORY_FAILURE = 'HISTORY_FAILURE';

// action creator
//fetchRest imports to Restaurants
export const fetchHistory = () => dispatch => {
  //console.log(`filter actions`,props)

  // action objects

  dispatch({ type: HISTORY_FETCH });
  // from thunk (see below) do some async action and dispatch an error or success action
 
 axiosWithAuth()
  .get(`https://welldone-db.herokuapp.com/api/history`)
    .then(res => 
        //console.log(`filter actions res.data`,res.data))
        dispatch({ type: HISTORY_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: HISTORY_FAILURE, payload: err.response }));
};