import React from "react";
import {Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function CheckOutSteps({step1,step2,step3,step4}) {
    return(
        <Nav className='justify-content-center mb-4' md={4}>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>

                     </LinkContainer>

                ):(
                    <Nav.Link disabled>Login</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/studentEntryPriSchDetails'>
                    <Nav.Link>Pri Details</Nav.Link>
                     </LinkContainer>
                ):(
                    <Nav.Link disabled>Pri Details</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/studentEntryPriSchScores'>
                    <Nav.Link>Pri Scores</Nav.Link>
                     </LinkContainer>
                ):(
                    <Nav.Link disabled>Pri scores</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeSelection'>
                    <Nav.Link>submit</Nav.Link>
                     </LinkContainer>
                ):(
                    <Nav.Link disabled>submit</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )

}
export default CheckOutSteps;