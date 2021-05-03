import React, { useContext } from "react";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavigationBar = observer(() => {
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
              <Button variant={"outline-light"}>Адміністративна панель</Button>{" "}
              <Button variant={"outline-light"} className="ml-3">
                Увійти
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
