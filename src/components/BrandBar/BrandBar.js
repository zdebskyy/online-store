import React, { useContext } from "react";
import styles from "./BrandBar.module.css";
import { Context } from "../../index";
import { Row, Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-lex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className={styles.card}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "dark" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
