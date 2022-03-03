import {APPLICATION_CREATE_SUCCESS,
    APPLICATION_CREATE_FAIL,
    APPLICATION_CREATE_REQUEST,
    APPLICATION_CREATE_RESET,APPLICATION_LIST_REQUEST,APPLICATION_LIST_SUCCESS,APPLICATION_LIST_FAIL,
    APPLICATION_DETAILS_SUCCESS,APPLICATION_DETAILS_REQUEST,APPLICATION_DETAILS_FAIL,
} from "../contants/applicationConstants";
export const applicationCreateReducer = (state={}, action)=>{
    switch (action.type) {
        case APPLICATION_CREATE_REQUEST:
            return{
                loading:true,

            }
        case APPLICATION_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                application:action.payload
            }
        case APPLICATION_CREATE_FAIL:
            return {
                loading: false,
                error:action.payload
            }
            case APPLICATION_CREATE_RESET:
            return {}
        default:
            return state

    }
}

export const applicationDetailsReducer = (state={loading:true,
    selectSchools:[], studentPriDetails:{},studentPriScores:{}
}, action)=>{
    switch (action.type) {
        case APPLICATION_DETAILS_REQUEST:
            return{
                ...state,
                loading:true,

            }
        case APPLICATION_DETAILS_SUCCESS:
            return {
                loading: false,
                success:true,
                application:action.payload
            }
        case APPLICATION_DETAILS_FAIL:
            return {
                loading: false,
                error:action.payload
            }

        default:
            return state

    }
}

export const  applicationListReducer = (state={applications:[]},action) =>{
    switch (action.type){
        case APPLICATION_LIST_REQUEST:
            return{
                loading:true
            }
        case APPLICATION_LIST_SUCCESS:
            return {
                loading: false,
                applications:action.payload,
            }
        case APPLICATION_LIST_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return state

    }
}