import {SCHOOL_LIST_REQUEST,SCHOOL_LIST_FAIL,SCHOOL_LIST_SUCCESS,
SCHOOL_DETAILS_SUCCESS,SCHOOL_DETAILS_FAIL,SCHOOL_DETAILS_REQUEST,SCHOOL_CREATE_RESET,SCHOOL_CREATE_SUCCESS,
    SCHOOL_CREATE_REQUEST,SCHOOL_CREATE_FAIL,SCHOOL_UPDATE_RESET,SCHOOL_UPDATE_SUCCESS,SCHOOL_UPDATE_REQUEST,SCHOOL_UPDATE_FAIL,
SCHOOL_CHOICELIST_SUCCESS,SCHOOL_CHOICELIST_REQUEST,SCHOOL_CHOICELIST_FAIL,SCHOOL_DELETE_SUCCESS,SCHOOL_DELETE_REQUEST,SCHOOL_DELETE_FAIL,
SCHOOL_CHOICEDETAILS_SUCCESS,SCHOOL_CHOICEDETAILS_REQUEST,SCHOOL_CHOICEDETAILS_FAIL} from "../contants/schoolConstants";
import axios from "axios";


export const schoolListReducer = (state = { schools: [] }, action) => {
    switch (action.type) {
        case SCHOOL_LIST_REQUEST:
            return {loading:true, schools: []}
        case SCHOOL_LIST_SUCCESS:
            return {loading: false, schools: action.payload}
        case SCHOOL_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}

export const schoolDetailsReducer = (state = {school:{} } , action) => {
    switch (action.type) {
        case SCHOOL_DETAILS_REQUEST:
            return {loading:true, ...state}
        case SCHOOL_DETAILS_SUCCESS:
            return {loading: false, school: action.payload}
        case SCHOOL_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}

export const schoolChoiceListReducer = (state = { schoolChoices: [] }, action) => {
    switch (action.type) {
        case SCHOOL_CHOICELIST_REQUEST:
            return {loading:true, schoolChoices: []}
        case SCHOOL_CHOICELIST_SUCCESS:
            return {loading: false, schoolChoices: action.payload}
        case SCHOOL_CHOICELIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}
// export const schoolChoiceDetailsReducer = (state = {school:{} } , action) => {
//     switch (action.type) {
//         case SCHOOL_CHOICEDETAILS_REQUEST:
//             return {loading:true, ...state}
//         case SCHOOL_CHOICEDETAILS_SUCCESS:
//             return {loading: false, school: action.payload}
//         case SCHOOL_CHOICEDETAILS_FAIL:
//             return {loading: false, error: action.payload}
//         default:
//             return state
//
//     }
//
// }
export const schoolChoiceDetailsReducer = (state = {school:{} } , action) => {
    switch (action.type) {
        case SCHOOL_CHOICEDETAILS_REQUEST:
            return {loading:true, ...state}
        case SCHOOL_CHOICEDETAILS_SUCCESS:
            return {loading: false, school: action.payload}
        case SCHOOL_CHOICEDETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}
export const schoolDeleteReducer = (state ={ } , action) =>{
    switch (action.type){
        case SCHOOL_DELETE_REQUEST:
            return {loading:true}
        case SCHOOL_DELETE_SUCCESS:
            return {loading:false,success: true
           }
        case SCHOOL_DELETE_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}
export const schoolCreateReducer = (state ={ } , action) =>{
    switch (action.type){
        case SCHOOL_CREATE_REQUEST:
            return {loading:true}
        case SCHOOL_CREATE_SUCCESS:
            return {loading:false,success: true,school: action.payload
           }
        case SCHOOL_CREATE_FAIL:
            return {loading:false, error: action.payload}
         case SCHOOL_CREATE_RESET:
            return {

            }
        default:
            return state
    }
}

export const schoolUpdateReducer = (state ={school:{} } , action) =>{
    switch (action.type){
        case SCHOOL_UPDATE_REQUEST:
            return {loading:true}
        case SCHOOL_UPDATE_SUCCESS:
            return {loading:false,success: true,school: action.payload
           }
        case SCHOOL_UPDATE_FAIL:
            return {loading:false, error: action.payload}
         case SCHOOL_UPDATE_RESET:
            return {
                school: {}

            }
        default:
            return state
    }
}



