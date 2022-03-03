import React from "react";
import {Nav, Navbar, Row, Col, Container, NavDropdown, Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {logout} from "../actions/userActions";

function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())

    }
    return(
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
              <Container >
                <Navbar.Brand href="/" className='py-3'>ISSS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="ml-auto">

                      {userInfo ? (
                                  <NavDropdown id='username' title={userInfo.name}>
                                  <LinkContainer to='/profile'>
                                      <NavDropdown.Item>Profile</NavDropdown.Item>
                                  </LinkContainer>
                                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                  </NavDropdown>
                              ): (
                                  <LinkContainer to='/login'>
                                   <Nav.Link><i className='fas fa-user' />Login</Nav.Link>
                                  </LinkContainer>
                              )}
                      }

                          <LinkContainer to='/success'>
                          <Nav.Link><i className='fas fa-dove'/>APPLY</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/school'>
                          <Nav.Link>schools</Nav.Link>
                      </LinkContainer>
                       {userInfo && userInfo.isAdmin && (
                                  <NavDropdown title='Admin' id='Adminmenu'>
                                  <LinkContainer to='/admin/userlist'>
                                      <NavDropdown.Item>Users</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer to='/admin/schoollist'>
                                      <NavDropdown.Item>Schools</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer to='/admin/applicationlist'>
                                      <NavDropdown.Item>Application</NavDropdown.Item>
                                  </LinkContainer>

                                </NavDropdown>


                       )}





                  </Nav>


                </Navbar.Collapse>
              </Container>
</Navbar>
        </header>
    )

}
export default Header