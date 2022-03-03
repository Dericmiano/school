import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {Row,Col} from "react-bootstrap";
// import schools from '../schools'
import School from '../components/School'
import {useState,useEffect} from "react";
import {listSchools} from "../actions/schoolActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


function SchoolListScreen() {
    const dispatch = useDispatch()
    const schoolList = useSelector(state => state.schoolList)
    const {error,loading,schools} = schoolList


    useEffect(()=>{
        dispatch(listSchools())

    }, [dispatch])
    return(
        <div>
            <h1>list of available high schools</h1>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                    {schools.map(school => (
                        <Col key={school._id} sm={12} md={6} lg={4} xl={3}>
                            <School school={school}/>
                        </Col>
                    ) )}
                </Row>
            }

        </div>
    )

}
export default SchoolListScreen