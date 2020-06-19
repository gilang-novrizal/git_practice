import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarReact = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/tugas1">Tugas 1</Link>{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tugas2">Tugas 2</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tugas3">Tugas 3</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/reqAPI">Request API</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Gilnov</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarReact;
