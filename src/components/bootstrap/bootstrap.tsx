'use client'
import { Card, Navbar, Nav, Offcanvas } from 'react-bootstrap'

const { Img, Body, Link: CardLink, Text, Title } = Card
const { Brand, Toggle, Collapse, Offcanvas: NavbarOffcanvas } = Navbar
const { Link: NavLink, Item: NavItem } = Nav
const {
  Header: OffcanvasHeader,
  Title: OffcanvasTitle,
  Body: OffcanvasBody,
} = Offcanvas

export {
  Container,
  Row,
  Col,
  Image,
  Card,
  Stack,
  Navbar,
  Nav,
  Offcanvas,
} from 'react-bootstrap'
export {
  Img as CardImg,
  Body as CardBody,
  CardLink,
  Text as CardText,
  Title as CardTitle,
  Brand as NavbarBrand,
  NavLink,
  Toggle as NavbarToggle,
  Collapse as NavbarCollapse,
  NavItem,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
  NavbarOffcanvas,
}
