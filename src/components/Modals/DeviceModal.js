import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getTypes, getBrands, createDevice } from "../../Api/deviceApi";

const DeviceModal = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
  }, [device]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((item) =>
        item.number === number ? { ...item, [key]: value } : item
      )
    );
  };
  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((_) => onHide());
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
              <Dropdown.Toggle>
                {device.selectedType.name || "Select type"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                  >
                    {type.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>
                {device.selectedBrand.name || "Select brand"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                  >
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Form.Control
            placeholder="Add device name"
            className="mt-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Add price"
            className="mt-5"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <Form.Control type="file" className="mt-5" onChange={selectFile} />
          <hr />
          <Button className="mb-3" onClick={addInfo}>
            Add specs
          </Button>
          {info.map((i) => (
            <Row key={i.number}>
              <Col md={4} className="mb-2">
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Title"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Description"
                />
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
        <Button variant="outline-dark" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeviceModal;
