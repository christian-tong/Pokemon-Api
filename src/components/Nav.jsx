import React from "react";

import { Navbar, Container } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="../../resources/img/icons/pokeball_ico.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Dechulandios
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Nav;
