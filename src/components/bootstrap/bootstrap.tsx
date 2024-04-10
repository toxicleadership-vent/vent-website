'use client'
import {
  Card,
  Navbar,
  Nav,
  Offcanvas,
  ListGroup,
  Carousel,
  Accordion,
  Modal,
} from 'react-bootstrap'

const {
  Img,
  Body,
  Link: CardLink,
  Text,
  Title,
  Header: CardHeader,
  ImgOverlay,
} = Card

const {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
} = Accordion

const { Brand, Toggle, Collapse, Offcanvas: NavbarOffcanvas } = Navbar
const { Link: NavLink, Item: NavItem } = Nav
const {
  Header: OffcanvasHeader,
  Title: OffcanvasTitle,
  Body: OffcanvasBody,
} = Offcanvas

const { Item: ListGroupItem } = ListGroup

const { Item: CarouselItem, Caption: CarouselCaption } = Carousel

const { Body: ModalBody, Header: ModalHeader } = Modal

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
  ProgressBar,
  Carousel,
  Accordion,
  Modal,
  Button,
  Spinner,
  ButtonGroup,
  ToggleButton,
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
  CarouselCaption,
  CarouselItem,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  ModalBody,
  ModalHeader,
}
