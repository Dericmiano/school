import {APPLICATION_CREATE_SUCCESS,
    APPLICATION_CREATE_FAIL,APPLICATION_LIST_REQUEST,APPLICATION_LIST_SUCCESS,APPLICATION_LIST_FAIL,
    APPLICATION_CREATE_REQUEST,APPLICATION_DETAILS_REQUEST,APPLICATION_DETAILS_SUCCESS,
APPLICATION_DETAILS_FAIL} from "../contants/applicationConstants";
import axios from "axios";
import {SELECT_CLEAR_ITEMS} from "../contants/selectConstants";
export const createApplication = (application) => async (dispatch,getState) => {
    try {
        dispatch({
            type:APPLICATION_CREATE_REQUEST
        })
        const{
            userLogin:{ userInfo },

        } = getState()
        const config = {

            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(
            `/api/applications/add/`,
            application,
            config
        )
        dispatch({
            type:APPLICATION_CREATE_SUCCESS,
            payload:data
        })
        dispatch({
        type:SELECT_CLEAR_ITEMS,
        payload:data
         })
        localStorage.removeItem('selectSchools')


    }catch (error){
        dispatch({
            type:APPLICATION_CREATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })
    }}

export const getApplicationDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type:APPLICATION_DETAILS_REQUEST
        })
        const{
            userLogin:{ userInfo },

        } = getState()
        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(
            `/api/applications/${id}/`,
            config
        )
        dispatch({
            type:APPLICATION_DETAILS_SUCCESS,
            payload:data
        })
    }catch (error){
        dispatch({
            type:APPLICATION_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })
    }}

export const listApplications = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: APPLICATION_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/applications/`,
            config
        )

        dispatch({
            type: APPLICATION_LIST_SUCCESS,
            payload:data
        })


    } catch (error) {
        dispatch({
            type: APPLICATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


