import React from 'react'
import axiosWithAuth from '../components/AxiosWithAuth';


export const FILTER_FETCH = 'FILTER_FETCH';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_FAILURE = 'FILTER_FAILURE';

// action creator
//fetchRest imports to Restaurants
export const fetchFilter = () => dispatch => {
  //console.log(`filter actions`,props)

  // action objects

  dispatch({ type: FILTER_FETCH });
  // from thunk (see below) do some async action and dispatch an error or success action
 
 axiosWithAuth()
  .get(`https://welldone-db.herokuapp.com/api/pumps`)
    .then(res => 
        //console.log(`filter actions res.data`,res.data))
        dispatch({ type: FILTER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: FILTER_FAILURE, payload: err.response }));
};