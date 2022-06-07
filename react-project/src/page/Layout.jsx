import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const data = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
          {
            // JSX 문법 사용
            data.state.user ? (
              /** 로그인일때 보이는 화면 */
              <Nav>
                <NavLink className="nav-link" to="/mypage">
                  {data.state.user}의 page
                </NavLink>
                <Button
                  onClick={() => {
                    data.action.setUser(null);
                    navigate("/");
                  }}
                >
                  logout
                </Button>
              </Nav>
            ) : (
              /** 로그아웃일때 보이는 화면 */
              <Nav>
                <NavLink className="nav-link" to="/loginform">
                  login
                </NavLink>
              </Nav>
            )
          }
        </Container>
      </Navbar>

      <main className="m-3">
        <Outlet></Outlet>
      </main>

      <footer className="main-footer">
        <div>
          <p>&copy; Green</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
