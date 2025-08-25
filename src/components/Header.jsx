import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#Home">CRUD Opeartion</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="Registration">Registration</Nav.Link>
                        <Nav.Link as={Link} to="Login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;