import React, { useState } from "react";
import styles from "./AdminPanel.module.css";
import { Container, Button } from "react-bootstrap";
import BrandModal from "../../components/Modals/BrandModal";
import DeviceModal from "../../components/Modals/DeviceModal";
import TypeModal from "../../components/Modals/TypeModal";

const AdminPanel = () => {
  const [openBrand, setOpenBrand] = useState(false);
  const [openType, setOpenType] = useState();
  const [openDevice, setOpenDevice] = useState(false);
  return (
    <Container className={styles.container}>
      <Button className={styles.btn} onClick={() => setOpenType(true)}>
        Add type of device
      </Button>
      <Button className={styles.btn} onClick={() => setOpenBrand(true)}>
        Add brand of device
      </Button>
      <Button className={styles.btn} onClick={() => setOpenDevice(true)}>
        Add device
      </Button>
      <BrandModal show={openBrand} onHide={() => setOpenBrand(false)} />
      <TypeModal show={openType} onHide={() => setOpenType(false)} />
      <DeviceModal show={openDevice} onHide={() => setOpenDevice(false)} />
    </Container>
  );
};

export default AdminPanel;
