import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo/logo.png";
import {
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShoppingBasket,
} from "react-icons/fa";
import { IoAddOutline } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container fuild>
          <Link className="logo" to="/">
            <img className="img-fluid" src={logo} alt="sigma" />
          </Link>
          <Navbar.Toggle cl aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-menu align-items-center">
              <NavLink className="custom-nav" to="/home">
                Home
              </NavLink>

              <NavDropdown
                className="custom-dropdown "
                title="Doctor"
                id="basic-nav-dropdown"
              >
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
              </NavDropdown>
              <NavDropdown
                className="custom-dropdown "
                title="Doctor"
                id="basic-nav-dropdown"
              >
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
                <NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </NavLink>
              </NavDropdown>

               
                            <NavDropdown className="custom-dropdown " title="Doctor" id="basic-nav-dropdown">
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>

                            </NavDropdown>

                            <NavLink className='custom-nav' to="/admin">Admin</NavLink>
                            <button className='header-btn'>Get Appointment <i className="fas fa-plus header-icon"></i>

                            </button>
                            <button className='header-btn btn-hover'>Get Appointment <i className="fas fa-plus header-icon"></i>

                            </button>
                            <span className='icon position-relative'><FaShoppingBasket />
                            <ul className='position-absolute icon-position'>
                                <li><FaShoppingBasket /></li>
                                <li><FaShoppingBasket /></li>
                            </ul>
                            </span>
                            
                            <span className='icon'><FaShoppingBasket /></span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
