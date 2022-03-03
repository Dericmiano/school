import {
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_FAIL,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_DETAILS_SUCCESS,
    SCHOOL_DETAILS_FAIL,
    SCHOOL_DETAILS_REQUEST,SCHOOL_UPDATE_REQUEST,SCHOOL_UPDATE_SUCCESS,SCHOOL_UPDATE_FAIL,
    SCHOOL_CHOICELIST_REQUEST,
    SCHOOL_CHOICELIST_FAIL,SCHOOL_CREATE_SUCCESS,SCHOOL_CREATE_REQUEST,SCHOOL_CREATE_FAIL,
    SCHOOL_CHOICELIST_SUCCESS,SCHOOL_DELETE_REQUEST,SCHOOL_DELETE_SUCCESS,SCHOOL_DELETE_FAIL,
    SCHOOL_CHOICEDETAILS_REQUEST, SCHOOL_CHOICEDETAILS_SUCCESS, SCHOOL_CHOICEDETAILS_FAIL
} from "../contants/schoolConstants";
import axios from "axios";
export const listSchools = () => async (dispatch) =>{
    try{
        dispatch({type:SCHOOL_LIST_REQUEST})
        const { data } = await axios.get('/api/schools/')
        dispatch({
            type:SCHOOL_LIST_SUCCESS,
            payload:data
        })


    }catch (error){
        dispatch({
            type:SCHOOL_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }

}
export const listSchoolChoiceDetails = (id) => async (dispatch) =>{
    try{
        dispatch({type:SCHOOL_CHOICEDETAILS_REQUEST})
        const { data } = await axios.get(`/api/schools/${id}`)
        dispatch({
            type:SCHOOL_CHOICEDETAILS_SUCCESS,
            payload:data
        })


    }catch (error){
        dispatch({
            type:SCHOOL_CHOICEDETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }

}

export const listSchoolsDetails = (id) => async (dispatch) =>{
    try{
        dispatch({type:SCHOOL_DETAILS_REQUEST})
        const { data } = await axios.get(`/api/schools/${id}`)
        dispatch({
            type:SCHOOL_DETAILS_SUCCESS,
            payload:data
        })


    }catch (error){
        dispatch({
            type:SCHOOL_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }

}
export const choiceListSchools = () => async (dispatch) =>{
    try{
        dispatch({type:SCHOOL_CHOICELIST_REQUEST})
        const { data } = await axios.get('/api/schools/')
        dispatch({
            type:SCHOOL_CHOICELIST_SUCCESS,
            payload:data
        })


    }catch (error){
        dispatch({
            type:SCHOOL_CHOICELIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }

}
export const deleteSchool = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SCHOOL_DELETE_REQUEST
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

        const { data } = await axios.delete(
            `/api/schools/delete/${id}/`,
            config
        )

        dispatch({
            type: SCHOOL_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: SCHOOL_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const createSchool = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SCHOOL_CREATE_REQUEST
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

        const { data } = await axios.post(
            `/api/schools/create/`,
            {},
            config
        )

        dispatch({
            type: SCHOOL_CREATE_SUCCESS,
            payload:data,
        })


    } catch (error) {
        dispatch({
            type: SCHOOL_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateSchool = (school) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SCHOOL_UPDATE_REQUEST
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

        const { data } = await axios.put(
            `/api/schools/update/${school._id}/`,
            school,
            config
        )

        dispatch({
            type: SCHOOL_UPDATE_SUCCESS,
            payload:data,
        })

        dispatch({
            type:SCHOOL_DETAILS_SUCCESS,
            payload:data
        })


    } catch (error) {
        dispatch({
            type: SCHOOL_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




