import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <Navbar className='p-2' bg="dark" variant="dark">
                <Container>
                   <Link style={{textDecoration:'none'}} to={''}>
                   <i class="fa-solid fa-car"></i>
                        <Navbar.Brand href="#home">RENT A CAR</Navbar.Brand>
                       
                   </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header