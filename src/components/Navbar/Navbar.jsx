import React from 'react';
import './Navbar.scss';
import images from '../../constants/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = (props) => {
  return (
    <nav>
      <div className='navDivFirstLine'>
        <a className='navLogoLink' href="/">
          <div className='navDivLogo'>
            <img className='cartelLogo' src={images.WuxiCartelLogo} alt="app logo" />
          </div>
        </a>
        <div className='navDivSearch'>
          <div className='navDivSearchForm'>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <Button variant="dark rounded-0">
              <FontAwesomeIcon icon={solid("magnifying-glass")} size='lg' style={{ color: "#ffffff", }} />
            </Button>
          </div>
        </div>
        <div className='navDivLanguage'>
          <Dropdown>
            <Dropdown.Toggle variant="light rounded-0" id="dropdown-basic">
              <FontAwesomeIcon icon={solid("globe")} size='xl' style={{ color: "#000000", }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
              <Dropdown.Item href="#/action-2">简</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='navDivSecondLine'>
        <div className='navDivButtonGroup'>
          <ButtonGroup aria-label="Basic example">
          <Button variant="danger rounded-0">Product</Button>
          <Button variant="light rounded-0">About</Button>
          <Button variant="light rounded-0">Contact Us</Button>
        </ButtonGroup>
        </div>
        <div className='navDivAccount'>
          <Dropdown>
            <Dropdown.Toggle variant="light rounded-0" id="dropdown-basic">
              Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sign up</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
