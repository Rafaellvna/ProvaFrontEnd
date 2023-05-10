import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Cabecalho() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/obraArte">Obras de Arte</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Obras</Nav.Link>
                        <Nav.Link href="/obraArte/tiposArte">Tipos de Arte</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Cabecalho