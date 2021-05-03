import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Auth.module.css";
import { Button, Container, Form, Card, Row } from "react-bootstrap";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className={styles.card}>
        <h2 className={styles.formTitle}>
          {isLogin ? "Авторизація" : "Реєстрація"}
        </h2>
        <Form className={styles.form}>
          <Form.Control
            className={styles.inputControl}
            placeholder="Введіть email..."
          />
          <Form.Control
            className={styles.inputControl}
            placeholder="Введіть пароль..."
          />
          <Row className={styles.row}>
            {isLogin ? (
              <p>
                Не зареєстровані?{" "}
                <NavLink to="/regiter">Зареєструватись</NavLink>
              </p>
            ) : (
              <p>
                Зареєстровані? <NavLink to="/login">Увійдіть</NavLink>
              </p>
            )}
            <Button className={styles.btn} variant={"outline-dark"}>
              {isLogin ? "Увійти" : "Зареєструватись"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
