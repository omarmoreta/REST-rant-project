const React = require("react")
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"

// Default layout for all the views
function Def (html) {
    return (
        <html>
            <head>
                <title>REST-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <Navbar className="justify-content-end" style={{ backgroundColor: "cornflowerblue" }} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">REST-Rant
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px'}}                            
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/places">Places</Nav.Link>
                            <Nav.Link href="/places/new">
                            Add Places
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                <div>
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Def