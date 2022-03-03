import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Form,Button,Row,Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {stRegister, stRegisterScores} from "../actions/studentsActions";
import FormContainer from "../components/FormContainer";

function StudentEntryScoresScreen({history, location}) {
    const [mathes,setMathes] = useState('')
    const [english,setEnglish] = useState('')
    const [kiswahili,setKiswahili] = useState('')
    const [science,setScience] = useState('')
    const [socialStudies,setSocialStudies] = useState('')
    const [averageScore,setAverageScore] = useState('')
    const [message,setMessage] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    // const redirect = location.search ? location.search.split('=')[1] : '/studentScores'

    const studentRegister = useSelector(state => state.studentRegister)
    const {studentInfo} = studentRegister


    const studentRegisterScores = useSelector(state => state.studentRegisterScores)
    const {error, loading, studentScores} = studentRegisterScores

    studentRegisterScores.averageScore = (Number(studentRegisterScores.mathes)+Number(studentRegisterScores.english)+
    Number(studentRegisterScores.kiswahili)+Number(studentRegisterScores.science)+Number(studentRegisterScores.socialStudies))


    useEffect(() => {
        if (studentScores && studentInfo){
                history.push('/studentScores')
        }
    }, [studentScores,history,studentInfo,userInfo
         ])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(stRegisterScores(averageScore,mathes, english, kiswahili, science,socialStudies))
    }
    return(
        <FormContainer>
            <h5> students score entry screen </h5>
             {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='mathes'>
                    <Form.Label>mathes </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter mathes'
                        value={mathes}
                        onChange={(e) => setMathes(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                    <Form.Group controlId='english'>
                    <Form.Label>english </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter english'
                        value={english}
                        onChange={(e) => setEnglish(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='kiswahili'>
                    <Form.Label>kiswahili </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter kiswahili'
                        value={kiswahili}
                        onChange={(e) => setKiswahili(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='science'>
                    <Form.Label>science </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter science'
                        value={science}
                        onChange={(e) => setScience(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='socialStudies'>
                    <Form.Label>socialStudies </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter socialStudies'
                        value={socialStudies}
                        onChange={(e) => setSocialStudies(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='averageScore'>
                    <Form.Label>averageScore </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter averageScore'
                        value={averageScore}
                        onChange={(e) => setAverageScore(e.target.value)}
                    >
                    </Form.Control>
                    </Form.Group>
                <br/>
                <Button type='submit' variant='primary' onClick={submitHandler}>submit</Button>

            </Form>





        </FormContainer>
    )

}
export default StudentEntryScoresScreen