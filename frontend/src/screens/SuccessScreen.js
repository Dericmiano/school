import React from "react";
import {Link} from "react-router-dom";
import {Button, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function SuccessScreen() {
    return(
        <div>
            {/*<h1 className="animate__animated animate__pulse">success page</h1>*/}
            <h5 className="animate__animated animate__pulse"><strong>strict Instructions for pupils</strong></h5>
            <p>At this point students should ensure the following</p>
            <ol className="animate__animated animate__pulse">
                <li>Registered and formed an account with the website</li>
                <li>Logged in with the collect personal  credentials</li>
                <li>Used an active email account in the registration of the site </li>
                <li>View all the                   <Link to='/school' classname='btn btn-close-white'>schools </Link>

                     and have knowledge of the cutoff points</li>
                <li>By proceeding the Students should give the collect details and scores after selction </li>
                <li>Any incorrect details or scores of the pupils will be illegal </li>
                <li>Once selected and placed the schools of your choice its done</li>
                <li>any students who opts to cancel selection can reach out the admin</li>
            </ol>

                <Link to='/schoolChoose' classname='btn btn-close-white'><Button>Confirmed</Button></Link>

        </div>
    )

}
export default SuccessScreen