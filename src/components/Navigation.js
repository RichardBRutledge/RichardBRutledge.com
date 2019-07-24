import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
    return (
        <NavDisplay>
            <Navbar collapseOnSelect inverse='true' fluid='true' bg='dark' expand='md' className='header'>
                <Navbar.Brand>
                    <Link to='/'>Richard B Rutledge</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='navbar-dark'>
                    <Nav className='ml-auto m-2'>
                        <Nav.Item className='mx-3'>
                            <Link to='/'>Home</Link>
                        </Nav.Item>
                        <Nav.Item className='mx-3'>
                            <Link to='/projects'>Projects</Link>
                        </Nav.Item>
                        <Nav.Item className='mx-3'>
                            <Link to='/resume'>Resume</Link>
                        </Nav.Item>
                        <Nav.Item className='mx-3'>
                            <Link  to='/contact'>Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavDisplay>
    )
}

const NavDisplay = styled.div`
    .header,
    .header-default {
      background: #fc354c; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fc354c, #0abfbc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fc354c, #0abfbc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .navbar-brand {
        color: white;
        &:hover {
            color: blue;
        }
    }
    a {
        color: white;
    }
    .navbar-toggler {
        background-color: white;
        &:hover {
            background-color: red;
        }

    
    }
 `;