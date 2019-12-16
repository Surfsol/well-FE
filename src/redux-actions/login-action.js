import React from 'react'
import axios from 'axios'
import { dispatch } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs'

export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchLogin = (account)=> dispatch=> {
    console.log(account)
    dispatch({type:LOGIN_FETCH})
    axios
    .post("https://well-done-staging.herokuapp.com/api/auth/login", account)
    .then(res => {
        console.log('login-action res.data',res.data)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("useId", res.data.id)
        localStorage.setItem("useId", res.data.user)
        dispatch({type: LOGIN_SUCCESS, payload:res.data.id})
    })
    .catch(err => console.log(err.response))
}

