import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const updateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div className="navbar">
      <Navbar fixed="top" expand="sm" collapseOnSelect>
        <Navbar.Brand className='logo-text'>
          <img src={logo} className='logo' alt='logo' />{' '}
          LIGTH CODE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link as={Link} to='/' className=
              { activeLink === 'home' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link as={Link} to='#about' className=
              { activeLink === 'about' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('about')}
            >About</Nav.Link>
            <Nav.Link as={Link} to='#mentors' className=
              { activeLink === 'mentors' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('mentors')}
            >Mentors</Nav.Link>
            <Nav.Link as={Link} to='#pricing' className=
              { activeLink === 'pricing' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('pricing')}
            >Pricing</Nav.Link>
            <Nav.Link as={Link} to='/news' className=
              { activeLink === 'news' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('news')}
            >News</Nav.Link>
            <Nav.Link as={Link} to='#contact-form' className=
              { activeLink === 'contact-form' ?
                'active-navbar-link' :
                'navbar-link'
              } 
              onClick={() => updateActiveLink('contact-form')}
            >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default NavBar;