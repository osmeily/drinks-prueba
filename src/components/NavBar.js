import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


const navbar = ({text, setText}) => {

    const handleChange = ({target}) => {
        setText(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{color: "white"}}>Drinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name='name' value={text} placeholder='Search your drink'/>
                    <button>Search</button>
                </form>
            </Container>
            </Navbar>
        </>
    )
}

export default navbar