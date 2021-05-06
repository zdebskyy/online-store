import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./DeviceItem.module.css";
import { Col, Card, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const url = "http://localhost:3001/";

const DeviceItem = ({ device }) => {
  const history = useHistory();

  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <Col
      md={4}
      className={"mt-2"}
      onClick={() => history.push("/device/" + device.id)}
    >
      <Card className={styles.card}>
        <Image
          width={250}
          height={350}
          src={url + device.img}
          className={styles.img}
        />
        <div className="mt-1 d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div>{device.rating}</div>
            <div>{star}</div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
