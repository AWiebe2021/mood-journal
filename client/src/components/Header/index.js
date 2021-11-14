import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';


import Auth from '../../utils/auth';

const Header = () => {
  // const logout = event => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="bg-secondary mb-4 py-2 flex-row align-center">
        <Container className="container flex-row justify-space-between-lg justify-center align-center">
          <Navbar.Brand as={Link} to='/'>
          <div class="typewriter">
            <h1>Otter Journal 🦦</h1>
            <p>A journal like no otter.</p>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className="text-center">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/profile'>
                  Me
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* tab container to do either signup or login component */}
      <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='signup-modal'>
          {/* tab container to do either signup or login component */}
          <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
              <Modal.Title id='signup-modal'>
                <Nav variant='pills'>
                  <Nav.Item>
                    <Nav.Link eventKey='login'>Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey='login'>
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                  <SignUpForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
    </>
  );
};

export default Header;
