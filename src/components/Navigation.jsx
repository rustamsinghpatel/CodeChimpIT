
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  return (
    <StyledNavbar expand="lg" variant="dark" className="main-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand-logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#enquire" className="enquire-now">Enquire Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
const StyledNavbar = styled(Navbar)`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #000;
  padding: 0.75rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    margin-right: auto;
    margin-left: 40px;
  }

  .navbar-brand img {
    height: 60px;
    display: block;
  }

  .nav-link {
    color: #fff !important;
    font-size: 1.1rem;
    margin-right: 1.5rem;

    &:hover {
      color: #00bcd4 !important;
    }
  }

  .navbar-collapse {
    justify-content: flex-end;
    margin-right: 40px;
  }

  .enquire-now {
    background-color: #617ACE;
    color: #fff;
    padding: 6px 18px !important;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    line-height: 1;
    display: flex;
    align-items: center;
    height: 36px;
    margin: auto 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4e63b5;
      color: #fff;
    }
  }
`;
