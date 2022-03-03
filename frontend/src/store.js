import {combineReducers,applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {schoolListReducer} from "./reducers/schoolReducers";
import {schoolDetailsReducer} from "./reducers/schoolReducers";
import {userLoginReducer} from "./reducers/userReducers";
import {userRegisterReducer} from "./reducers/userReducers";
import {studentRegisterReducer} from "./reducers/studentsReducers";
import {userDetailsReducer} from "./reducers/userReducers";
import {studentRegisterScoresReducer} from "./reducers/studentsReducers";
import {schoolChoiceListReducer} from "./reducers/schoolReducers";
import {schoolChoiceDetailsReducer} from "./reducers/schoolReducers";
import {selectReducer} from "./reducers/selectReducers";
import {userUpdateProfileReducer} from "./reducers/userReducers";
import {applicationCreateReducer} from "./reducers/applicationReducers"
import {applicationDetailsReducer} from "./reducers/applicationReducers";
import {userListReducer} from "./reducers/userReducers";
import {userDeleteReducer} from "./reducers/userReducers";
import {userUpdateReducer} from "./reducers/userReducers";
import {schoolDeleteReducer} from "./reducers/schoolReducers";
import {schoolCreateReducer} from "./reducers/schoolReducers";
import {schoolUpdateReducer} from "./reducers/schoolReducers";
import {applicationListReducer} from "./reducers/applicationReducers";

const reducer = combineReducers({
    schoolList:schoolListReducer,
    schoolDetails:schoolDetailsReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    studentRegister:studentRegisterReducer,
    userDetails:userDetailsReducer,
    studentRegisterScores:studentRegisterScoresReducer,
    schoolChoiceList:schoolChoiceListReducer,
    schoolChoiceDetails:schoolChoiceDetailsReducer,
    select:selectReducer,
    userUpdateProfile:userUpdateProfileReducer,
    applicationCreate:applicationCreateReducer,
    applicationDetails:applicationDetailsReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    schoolDelete:schoolDeleteReducer,
    schoolCreate:schoolCreateReducer,
    schoolUpdate:schoolUpdateReducer,
    applicationList:applicationListReducer,




})

const selectSchoolsFromStorage = localStorage.getItem('selectSchools')?
    JSON.parse(localStorage.getItem('selectSchools')) : []


const userInfoFromStorage = localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')) : null

const studentPriDetailsFromStorage = localStorage.getItem('studentPriDetails')?
    JSON.parse(localStorage.getItem('studentPriDetails')) : {}

const studentPriScoresFromStorage = localStorage.getItem('studentPriScores')?
    JSON.parse(localStorage.getItem('studentPriScores')) : []

// const studentInfoFromStorage = localStorage.getItem('studentInfo')?
//     JSON.parse(localStorage.getItem('studentInfo')) : null

// const studentScoreFromStorage = localStorage.getItem('studentScores')?
//     JSON.parse(localStorage.getItem('studentScores')) : null


const initialState = {
    select:{
        studentPriScores:studentPriScoresFromStorage,
        selectSchools:selectSchoolsFromStorage,
        studentPriDetails:studentPriDetailsFromStorage,
    },
    userLogin: {userInfo:userInfoFromStorage},

    // studentRegister: {studentInfo:studentInfoFromStorage},
    // studentRegisterScores:{studentScores:studentScoreFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState
    ,composeWithDevTools(applyMiddleware(...middleware)))

export default store
