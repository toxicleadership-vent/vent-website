'use client'
import { Card, Navbar, Nav, Offcanvas, ListGroup } from 'react-bootstrap'

const {
  Img,
  Body,
  Link: CardLink,
  Text,
  Title,
  Header: CardHeader,
  ImgOverlay,
} = Card
const { Brand, Toggle, Collapse, Offcanvas: NavbarOffcanvas } = Navbar
const { Link: NavLink, Item: NavItem } = Nav
const {
  Header: OffcanvasHeader,
  Title: OffcanvasTitle,
  Body: OffcanvasBody,
} = Offcanvas

const { Item: ListGroupItem } = ListGroup

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
  ListGroup,
} from 'react-bootstrap'
export {
  Img as CardImg,
  ImgOverlay as CardImageOverlay,
  Body as CardBody,
  CardLink,
  Text as CardText,
  Title as CardTitle,
  CardHeader,
  Brand as NavbarBrand,
  NavLink,
  Toggle as NavbarToggle,
  Collapse as NavbarCollapse,
  NavItem,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
  NavbarOffcanvas,
  ListGroupItem,
}
