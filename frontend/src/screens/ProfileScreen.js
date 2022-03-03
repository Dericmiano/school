import React from "react";
import {useState,useEffect} from "react";
import {Form, Button, Row, Col, FormGroup} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {getUserDetails, updateUserProfile} from "../actions/userActions"
import {USER_UPDATE_PROFILE_RESET} from "../contants/userConstants";

function ProfileScreen({history}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState('')


    const dispatch = useDispatch()


    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile





    useEffect(() => {
        if (!userInfo){
            history.push('/login')

        }else{
            if (!user || !user.name || success || userInfo._id !== user._id){
                dispatch({
                    type:USER_UPDATE_PROFILE_RESET
                })
                dispatch(getUserDetails('profile'))
                // dispatch(listMyOrders())
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch,history,userInfo, user, success])//dependencies
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage("pass words dont match")
        }else {
            dispatch(updateUserProfile(
                {'id':user._id,
                    'name':name,
                    'email' : email,
                    'password':password
            }))
            setMessage("")
            // console.log("updating")

        }
    }
    return(
        <Row>
            <Col md={3}>
                <h2>user profile</h2>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader/>}
                    <Form onSubmit={submitHandler}>
                         <FormGroup controlId={name}>
                            <Form.Label>name</Form.Label>
                            <Form.Control
                            type='name'
                            required
                            placeholder='enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            >

                            </Form.Control>

                        </FormGroup>
                         <FormGroup controlId={email}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                required
                            type='email'
                            placeholder='enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            >

                            </Form.Control>

                        </FormGroup>
                         <FormGroup controlId={password}>
                            <Form.Label>Pass word</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            >

                            </Form.Control>

                        </FormGroup>
                        <FormGroup controlId={confirmPassword}>
                            <Form.Label> confirm Pass word</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            >

                            </Form.Control>

                        </FormGroup>
                        <Button type='submit' variant='primary'>update</Button>

                    </Form>


            </Col>

        </Row>
    )

}
export default ProfileScreen