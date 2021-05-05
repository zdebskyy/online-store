import React, { useContext, useEffect } from "react";
import styles from "./Store.module.css";
import { Context } from "../../index";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import { observer } from "mobx-react-lite";
import {
  getTypes,
  getBrands,
  getDevice,
  getDeviceById,
} from "../../Api/deviceApi";

const Store = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
    getDevice().then((data) => device.setDevices(data.rows));
    getDeviceById();
  }, [device]);

  return (
    <Container>
      <Row className={styles.row}>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Store;
