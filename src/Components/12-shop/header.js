import React , {useState} from 'react'
import{BsSearch} from "react-icons/bs"
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
    Input,
    InputGroup,
  } from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar expand="md" color='info'>
        <NavbarBrand href="/">Techno Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
                <NavLink href="#">
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Product
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    About Us
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Contact Us
                </NavLink>
            </NavItem>
            
            
          </Nav>
          <NavbarText>
            <InputGroup>
                <Input/>
                <Button>
                    <BsSearch/>
                </Button>
            </InputGroup>
            </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header