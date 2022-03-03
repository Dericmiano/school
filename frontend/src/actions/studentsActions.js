import {STUDENT_REGISTER_SUCCESS,STUDENT_REGISTER_REQUEST,STUDENT_REGISTER_FAIL,
STUDENT_REGISTERSCORE_FAIL,STUDENT_REGISTERSCORE_SUCCESS,STUDENT_REGISTERSCORE_REQUEST} from "../contants/studentsConstants";
import axios from "axios";
export const stRegister = (username, school,sex,DOB,index_number,) => async (dispatch) =>{
    try{
        dispatch({
            type:STUDENT_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            '/api/users/students/',

            {'username':username,'school': school, 'sex':sex,'index_number':index_number,'DOB':DOB},

            config
        )
        dispatch({
            type:STUDENT_REGISTER_SUCCESS,
            payload:data
        })
        //  dispatch({
        //     type:USER_LOGIN_SUCCESS,
        //     payload:data
        // })

        localStorage.setItem('studentInfo',JSON.stringify(data))


    }catch (error){
        dispatch({
            type:STUDENT_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }
}

export const stRegisterScores = (averageScore, mathes,english,kiswahili,science,socialStudies) => async (dispatch) =>{
    try{
        dispatch({
            type:STUDENT_REGISTERSCORE_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            '/api/users/studentScores/',

            {'averageScore':averageScore,'mathes': mathes, 'english':english,'kiswahili':kiswahili,'science':science
            ,'socialStudies':socialStudies},
            config
        )
        dispatch({
            type:STUDENT_REGISTERSCORE_SUCCESS,
            payload:data
        })
        //  dispatch({
        //     type:USER_LOGIN_SUCCESS,
        //     payload:data
        // })

        localStorage.setItem('studentScores',JSON.stringify(data))


    }catch (error){
        dispatch({
            type:STUDENT_REGISTERSCORE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
                :error.message,
        })

    }
}
