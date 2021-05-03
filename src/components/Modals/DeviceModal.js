import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";

const DeviceModal = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-center">
            <Dropdown className="mr-5 ">
              <Dropdown.Toggle>Select type</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>Select brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Form.Control placeholder="Add device name" className="mt-5" />
          <Form.Control
            type="number"
            placeholder="Add price"
            className="mt-5"
          />
          <Form.Control type="file" className="mt-5" />
          <hr />
          <Button className="mb-3" onClick={addInfo}>
            Add specs
          </Button>
          {info.map((i) => (
            <Row key={i.number}>
              <Col md={4} className="mb-2">
                <Form.Control placeholder="Title" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Description" />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)}>Remove</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-dark" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeviceModal;
