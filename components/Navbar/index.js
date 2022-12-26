import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Button,
} from "reactstrap";
import { removeOneProductToCart } from "../../features/Cart/cartSlice";
import NavAuthSide from "./NavAuthSide";

function NavbarItems(args) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeHandler = (title) => {
    console.log("her");
    console.log(title);
    dispatch(removeOneProductToCart({ title }));
  };
  return (
    <div>
      <Navbar
        container={true}
        expand="md"
        dark={true}
        light={false}
        color="dark"
        {...args}
      >
        <Link href="/" className="navbar-brand">
          ShopFly
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link href="/" className="nav-item nav-link">
                Ana Sayfa
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/aboutUs" className="nav-item nav-link">
                Hakkımızda
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sepet
              </DropdownToggle>
              <DropdownMenu right>
                {cart.map((c) => (
                  <DropdownItem
                    key={c.title}
                    style={
                      {
                        // marginBottom: "10px",
                      }
                    }
                  >
                    {c.title}
                    <Button
                      color="danger"
                      style={{
                        position: "absolute",
                        right: "0",
                      }}
                      onClick={({ title }) => {
                        title = c.title;

                        changeHandler(title);
                      }}
                    >
                      -
                    </Button>
                    <hr />
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <Link href="/cart" className="link">
                  Sepete Git
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="navbar-nav ms-auto">
            <NavAuthSide />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarItems;
