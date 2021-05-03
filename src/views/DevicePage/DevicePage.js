import React from "react";
import styles from "./DevicePage.module.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";

const DeviceItem = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-evenly">
        <Col md={3} className="d-flex justify-content-around">
          <Image width={300} height={400} src="../../public/2400857585.jpg" />
        </Col>

        <Col md={8} className={styles.infoContainer}>
          <div className={styles.addTo}>
            <h3>Price: 1099$</h3>
            <Button variant={"outline-dark"}>Add to card</Button>
          </div>
          <div className={styles.info}>
            <h2>Specs:</h2>
            <p>
              Dual 12MP camera system: Ultra Wide and Wide cameras Ultra Wide:
              ƒ/2.4 aperture and 120° field of view Wide: ƒ/1.6 aperture 2x
              optical zoom out Optical image stabilization (Wide)
            </p>
            <p>
              Digital zoom up to 5x Portrait mode with advanced bokeh and Depth
              Control Portrait Lighting with six effects (Natural, Studio,
              Contour, Stage, Stage Mono, High‑Key Mono)
            </p>
            <p>Five‑element lens (Ultra Wide); seven‑element lens (Wide)</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DeviceItem;
