import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./naav.css";
import { Link, useNavigate } from "react-router-dom";
const Naav = () => {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.key === "Enter" && navigate("/search", { state: e.target.value });
  };
  return (
    <div className="Wrap-navbar">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to={"/tv"}>
                TVShows
              </Nav.Link>
              <Nav.Link as={Link} to={"/favorite"}>
                Favorite
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link>Login</Nav.Link>
              {search ? (
                <IoClose
                  className="text-light"
                  onClick={() => setSearch((s) => !s)}
                />
              ) : (
                <FaSearch onClick={() => setSearch((s) => !s)} />
              )}
              <Nav.Link href="#link"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {search && (
        <Container fluid className="wrap-search ">
          <Container>
            <FaSearch />
            <input
              type="text"
              className="w-75"
              onKeyDown={(e) => handleSearch(e)}
            />
          </Container>
        </Container>
      )}
    </div>
  );
};

export default Naav;
