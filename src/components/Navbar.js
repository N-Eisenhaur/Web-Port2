import React from "react";
import "../App.css";

import * as Reactbootstrap from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="App">
      
      <Reactbootstrap.Navbar collapseOnSelect expand="md" >
        <Reactbootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Reactbootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <Reactbootstrap.Nav className="mr-auto">
            <Reactbootstrap.Nav.Link href="#Home">Home</Reactbootstrap.Nav.Link>
            <Reactbootstrap.Nav.Link href="http://demonstrationsites.freecluster.eu/P-html%20test/">Contact</Reactbootstrap.Nav.Link>

          </Reactbootstrap.Nav>

        </Reactbootstrap.Navbar.Collapse>
      </Reactbootstrap.Navbar>

    </div>
  );
};

export default NavBar;
