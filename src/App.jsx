import React from "react";
import Carousels from "./components/Carousels";

import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Container>
        <Row style={{ display: "block", width: "100%", padding: "1em" }}>
          <Col sm="auto">
            <Search />
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ padding: "1em" }}>
          <Col sm="auto">
            <Carousels />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
