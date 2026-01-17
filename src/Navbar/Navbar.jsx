import { Container, Nav, Navbar } from 'react-bootstrap';
import style from './Navbar.module.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className={style.customNavbar}>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-around gap-4">
            <Nav.Link href="#Portfolio" className='text-white'>Portfolio</Nav.Link>
            <Nav.Link href="#About" className='text-white'>About</Nav.Link>
            <Nav.Link href="#Contact" className='text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
