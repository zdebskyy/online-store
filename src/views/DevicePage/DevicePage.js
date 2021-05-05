import React, { useState, useEffect } from "react";
import styles from "./DevicePage.module.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDeviceById } from "../../Api/deviceApi";

const url = "http://localhost:3001/";

const DeviceItem = () => {
  const [device, setDevice] = useState({ info: [] });
  const params = useParams();

  useEffect(() => {
    getDeviceById(params.id).then((data) => setDevice(data));
  }, [params.id]);
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-evenly">
        <Col md={3} className="d-flex justify-content-around">
          <Image width={300} height={400} src={url + device.img} />
        </Col>

        <Col md={8} className={styles.infoContainer}>
          <div className={styles.addTo}>
            <h3>{device.price}$</h3>
            <Button variant={"outline-dark"}>Add to card</Button>
          </div>
          <div className={styles.info}>
            <h2>Specs:</h2>
            {device.info.map((info) => (
              <Row key={info.id}>
                {info.title}: {info.description}
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DeviceItem;
