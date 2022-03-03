import {STUDENT_REGISTER_FAIL,STUDENT_REGISTER_SUCCESS,STUDENT_REGISTER_REQUEST,
STUDENT_REGISTERSCORE_SUCCESS,STUDENT_REGISTERSCORE_REQUEST,STUDENT_REGISTERSCORE_FAIL} from "../contants/studentsConstants";
export const studentRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_REGISTER_REQUEST:
            return {loading:true}
        case STUDENT_REGISTER_SUCCESS:
            return {loading: false, studentInfo: action.payload}
        case STUDENT_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}
export const studentRegisterScoresReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_REGISTERSCORE_REQUEST:
            return {loading:true}
        case STUDENT_REGISTERSCORE_SUCCESS:
            return {loading: false, studentInfo: action.payload}
        case STUDENT_REGISTERSCORE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }

}
