import React, { useState, useContext } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import styles from "./Auth.module.css";
import { Button, Container, Form, Card, Row } from "react-bootstrap";
import { registration, login } from "../../Api/userApi";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === "/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logClick = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      history.push("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className={styles.inputControl}
            placeholder="Введіть пароль..."
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
            <Button
              className={styles.btn}
              variant={"outline-dark"}
              onClick={logClick}
            >
              {isLogin ? "Увійти" : "Зареєструватись"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
