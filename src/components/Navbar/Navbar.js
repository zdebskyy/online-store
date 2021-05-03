import React, { useContext } from "react";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavigationBar = observer(() => {
  const history = useHistory();
  const { user } = useContext(Context);
  return (
    <>
      <Navbar className={styles.navbar} variant="dark">
        <Container>
          <NavLink to="/" className={styles.logo}>
             Store
          </NavLink>
          {!user.isAuth ? (
            <Nav className={styles.nav}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push("/admin")}
              >
                Адмін панель
              </Button>{" "}
              <Button
                variant={"outline-light"}
                className="ml-3"
                onClick={() => history.push("/login")}
              >
                Вийти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>Авторизація</Button>{" "}
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavigationBar;
