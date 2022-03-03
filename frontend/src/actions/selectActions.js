import axios from "axios";
import {SELECT_ADD_SCHOOL,SELECT_REMOVE_SCHOOL,SELECT_SAVE_STUDENTPRIDETAILS,SELECT_SAVE_STUDENTPRISCORES} from "../contants/selectConstants";
import schools from "../schools";

export const selectSchool = (id,numberOfChoice) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/schools/${id}`)

    dispatch({
        type:SELECT_ADD_SCHOOL,
        payload:{
            school:data._id,
            name:data.name,
            image:data.image,
            cutoff:data.cutoff,
            numberOfstudents:data.numberOfstudents,
            numberOfChoice,
        }
    })
    localStorage.setItem('selectSchools',JSON.stringify( getState().select.selectSchools))


}
export const removeFromSelect = (id) =>(dispatch, getState) =>{
    dispatch({
        type:SELECT_REMOVE_SCHOOL,
        payload:id,
    })
    localStorage.setItem('selectSchools',JSON.stringify( getState().select.selectSchools))

}

export const saveStudentsPriDetails = (data) =>(dispatch) =>{
    dispatch({
        type:SELECT_SAVE_STUDENTPRIDETAILS,
        payload:data,
    })
    localStorage.setItem('studentPriDetails',JSON.stringify(data))

}

export const saveStudentsPriScores = (data) =>(dispatch) =>{
    dispatch({
        type:SELECT_SAVE_STUDENTPRISCORES,
        payload:data,
    })
    localStorage.setItem('studentPriScores',JSON.stringify(data))

}

