import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap"

function NavBar () {
  return (
    <div>
      <Navbar expand="md">
        <NavLink to='/jobly' className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auot" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>

          {/* Validate authentication to display: profile, logout, login or signup */}
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar