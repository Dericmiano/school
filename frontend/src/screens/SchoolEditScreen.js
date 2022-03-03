import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button,  FormGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {listSchoolsDetails,updateSchool} from "../actions/schoolActions";
import FormContainer from "../components/FormContainer";
import {SCHOOL_UPDATE_RESET} from "../contants/schoolConstants";
import axios from "axios";


function SchoolEditScreen({match, history}) {

    const schoolId = match.params.id

    const  [name, setName] = useState('')
    const  [cutoff, setCutoff] = useState(0)
    const  [image, setImage] = useState('')
    // const  [numberOfChoice, setNumberOfChoice] = useState(0)
    const  [numberOfstudents, setNumberOfStudents] = useState(0)
    const  [level, setLevel] = useState('')
    const  [location, setLocation] = useState('')
    const  [status, setStatus] = useState('')
    const  [motto, setMotto] = useState('')
    const  [uploading, setUploading] = useState(false)


    const dispatch = useDispatch()


    const schoolDetails = useSelector(state => state.schoolDetails)
    const {error, loading, school} = schoolDetails

    const schoolUpdate = useSelector(state => state.schoolUpdate)
    const {error:errorUpdate, loading:loadingUpdate, success:successUpdate} = schoolUpdate



    useEffect(() => {
        if (successUpdate){
            dispatch({type:SCHOOL_UPDATE_RESET})
            history.push('/admin/schoollist')
        }else {
            if (!school.name || school._id !== Number(schoolId)){
                dispatch(listSchoolsDetails(schoolId))
            }else{
                setName(school.name)
                setCutoff(school.cutoff)
                setImage(school.image)
                // setNumberOfChoice(school.cutoff)
                setNumberOfStudents(school.numberOfstudents)
                setLevel(school.level)
                setMotto(school.motto)
                setStatus(school.status)
                setLocation(school.location)

            }

        }
            },[dispatch,school,schoolId, history])//dependencies

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateSchool({
            _id:schoolId,
            name,
            // numberOfChoice,
            numberOfstudents,
            cutoff,
            image,
            status,
            location,
            level,
            motto

        }))
        // dispatch(updateUser({_id: user._id,name, email,isAdmin}))
    }
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('school_id', schoolId)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/schools/upload/', formData, config)


            setImage(data)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }

    return(
        <div>
            <Link to={`/admin/schoollist`}>
                Go back
            </Link>
            <FormContainer>
            <h1>Edit school</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message> }
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                    :
                    (
                        <Form onSubmit={submitHandler}>

                         <FormGroup controlId={name}>
                            <Form.Label>name</Form.Label>
                            <Form.Control
                            type='name'
                            placeholder='enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            >

                            </Form.Control>


                        </FormGroup>
                                                    <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>

                                <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                >

                                </Form.File>
                                {uploading && <Loader />
                                }

                            </Form.Group>

                             <FormGroup controlId={cutoff}>
                                 <Form.Label>Cut off</Form.Label>

                            <Form.Control
                            type='text'
                            lable="cutoff"
                            value={cutoff}
                            onChange={(e) => setCutoff(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>


                        {/* <FormGroup controlId={numberOfChoice}>*/}
                        {/*     <Form.Label>no f choice</Form.Label>*/}
                        {/*    <Form.Control*/}
                        {/*    type='text'*/}
                        {/*    placeholder='enter number of choice'*/}
                        {/*    value={numberOfChoice}*/}
                        {/*    onChange={(e) => setNumberOfChoice(e.target.value)}*/}
                        {/*    >*/}
                        {/*    </Form.Control>*/}

                        {/*</FormGroup>*/}
                         <FormGroup controlId={numberOfstudents}>
                             <Form.Label>no f students</Form.Label>

                            <Form.Control
                            type='text'
                            lable="population"
                            value={numberOfstudents}
                            onChange={(e) => setNumberOfStudents(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>
                             <FormGroup controlId={level}>
                                 <Form.Label>level</Form.Label>

                            <Form.Control
                            type='name'
                            lable="level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>
                             <FormGroup controlId={location}>
                                 <Form.Label>location</Form.Label>

                            <Form.Control
                            type='name'
                            lable="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>
                         <FormGroup controlId={status}>
                             <Form.Label>status</Form.Label>

                            <Form.Control
                            type='name'
                            lable="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>
                             <FormGroup controlId={motto}>
                                 <Form.Label>motto</Form.Label>

                            <Form.Control
                            type='name'
                            lable="motto"
                            value={motto}
                            onChange={(e) => setMotto(e.target.value)}
                            >

                            </Form.Control>
                        </FormGroup>



                        <Button type='submit' variant='primary'>Update</Button>

                        </Form>
                    )}




        </FormContainer>

        </div>

)}
export default SchoolEditScreen