import React from "react";
import { Stack, Form, Button } from "react-bootstrap";

function Search() {
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </div>
  );
}

export default Search;
