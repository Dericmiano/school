import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {Row,Col} from "react-bootstrap";
// import schools from '../schools'
import SchoolChoice from "../components/SchoolChoice";
import {useState,useEffect} from "react";
import {choiceListSchools} from "../actions/schoolActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


function SchoolChoosingScreen({history}) {

    const dispatch = useDispatch()
    const schoolChoiceList = useSelector(state => state.schoolChoiceList)
    const {error,loading,schoolChoices} = schoolChoiceList


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
       



    useEffect(()=>{
         if (!userInfo){
            history.push('/login')
        }
        dispatch(choiceListSchools())

    }, [dispatch, history, userInfo])
    return(
        <div>
            <h4>select 3 schools</h4>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                    {schoolChoices.map(schoolChoice => (
                        <Col key={schoolChoice._id} sm={12} md={6} lg={4} xl={3}>
                            <SchoolChoice school={schoolChoice}/>
                        </Col>
                    ) )}
                </Row>
            }

        </div>
    )

}
export default SchoolChoosingScreen