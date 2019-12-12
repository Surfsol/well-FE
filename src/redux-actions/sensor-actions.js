import React from 'react'
import axiosWithAuth from '../components/AxiosWithAuth';


export const SENSOR_FETCH = 'SENSOR_FETCH';
export const SENSOR_SUCCESS = 'SENSOR_SUCCESS';
export const SENSOR_FAILURE = 'SENSOR_FAILURE';

// action creator
//fetchRest imports to Restaurants
export const fetchSensor = () => dispatch => {
  //console.log(`filter actions`,props)

  // action objects

  dispatch({ type: SENSOR_FETCH });
  // from thunk (see below) do some async action and dispatch an error or success action
 
 axiosWithAuth()
  .get(`https://welldone-db.herokuapp.com/api/sensors/recent`)
    .then(res => 
        //console.log(`filter actions res.data`,res.data))
        dispatch({ type: SENSOR_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: SENSOR_FAILURE, payload: err.response }));
};