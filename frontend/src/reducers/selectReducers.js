import {SELECT_ADD_SCHOOL,SELECT_REMOVE_SCHOOL,SELECT_SAVE_STUDENTPRIDETAILS,SELECT_SAVE_STUDENTPRISCORES}
    from "../contants/selectConstants";
import {SELECT_CLEAR_ITEMS} from "../contants/selectConstants";
export const selectReducer = (state={selectSchools:[]
    ,studentPriDetails:{},studentPriScores:{} },action) => {
    switch (action.type) {
        case SELECT_ADD_SCHOOL:
            const item = action.payload
            const existSchool = state.selectSchools.find(x=>x.school ===item.school)

            if (existSchool){
                return {
                    ...state,
                    selectSchools: state.selectSchools.map(x=>
                    x.school === existSchool.school ? item : x
                    )
                }

            }else {
                return {
                    ...state,
                    selectSchools: [...state.selectSchools,item]
                }
            }
        case SELECT_REMOVE_SCHOOL:
            return {
                ...state,
                selectSchools: state.selectSchools.filter(x=>x.school !== action.payload)
            }
        case SELECT_SAVE_STUDENTPRIDETAILS:
            return {
                ...state,
                studentPriDetails: action.payload
            }
        case SELECT_SAVE_STUDENTPRISCORES:
            return {
                ...state,
                studentPriScores: action.payload
            }
        case SELECT_CLEAR_ITEMS:
            return {
                ...state,
                selectSchools: []
            }

        default:
            return state

    }
  
}