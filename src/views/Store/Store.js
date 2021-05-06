import React, { useContext, useEffect } from "react";
import styles from "./Store.module.css";
import { Context } from "../../index";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import PaginationPages from "../../components/PaginationPages";
import { observer } from "mobx-react-lite";
import { getTypes, getBrands, getDevice } from "../../Api/deviceApi";

const Store = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
    getDevice(null, null, 1, 1).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    getDevice(device.selectedBrand.id, device.selectedType.id, device.page, 2);
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
          <PaginationPages />
        </Col>
      </Row>
    </Container>
  );
});

export default Store;
