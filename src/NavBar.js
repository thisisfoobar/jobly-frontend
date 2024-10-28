import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ currentUser, setToken, setUsername, setCurrentUser }) {
  const handleLogout = () => {
    setToken(null);
    setUsername(null)
    setCurrentUser(null);
  };
  return (
    <Navbar color="light" light expand="md">
    <NavLink to="/" className="navbar-brand">
      Jobly
    </NavLink>
    <Nav className="ml-auto" navbar>
      {currentUser ? (
        <>
          <NavItem>
            <NavLink to="/companies" className="nav-link">
              Companies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs" className="nav-link">
              Jobs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" className="nav-link" onClick={handleLogout}>
              Logout
            </NavLink>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  </Navbar>
);
}

export default NavBar;
