import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo from './logo.png';
import './logo.css'
const Navigation = () => {
    return (
        <Navbar className="Nav sticky-top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="Logo"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                    <Nav className="Text mr-auto">
                        <Row>
                            <Col><Nav.Link href="#home">Home</Nav.Link></Col>
                            <Col><Nav.Link href="#link">Customers</Nav.Link></Col>
                            <Col><Nav.Link href="#link">Transactions</Nav.Link></Col>
                            <Col><Nav.Link href="#link">About</Nav.Link></Col>
                        </Row>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;