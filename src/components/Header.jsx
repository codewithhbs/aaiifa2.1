import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about-us" },
    {
      name: "Our Team",
      dropdown: true,
      items: [
        { name: "Governing Bodies", href: "/governing-bodies" },
        { name: "Life Member", href: "/life-members" },
        { name: "National Council Member", href: "/national-member" },
        { name: "Active Member", href: "/active-member" },
      ],
    },
    {
      name: "Newsletter",
      dropdown: true,
      items: [
        { name: "2025 Newsletter", href: "/newsletter-2025" },
        { name: "2024 Newsletter", href: "/newsletter-2024" },
        { name: "2023 Newsletter", href: "/newsletter-2023" },
        { name: "2022 Newsletter", href: "/newsletter-2022" },
        { name: "2021 Newsletter", href: "/newsletter-2021" },
        { name: "2020 Newsletter", href: "/newsletter-2020" },
        { name: "2019 Newsletter", href: "/newsletter-2019" },
        { name: "2018 Newsletter", href: "/newsletter-2018" },
        { name: "2017 Newsletter", href: "/newsletter-2017" },
        { name: "2016 Newsletter", href: "/newsletter-2016" },
      ],
    },
    {
      name: "Event",
      dropdown: true,
      items: [
        { name: "Past Event", href: "/past-events" },
        { name: "Event Video", href: "/past-videos" },
      ],
    },
    { name: "Directory Sale", href: "/directory-sale" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header>
      {/* Topbar */}
<div id="topbar-wrap" className="topbar-layout1">
  <Container>
    <Row className="align-items-center text-center text-lg-start g-2 g-lg-0">
      {/* Phone */}
      <Col xs={12} md={4} className="single-item">
        <FaPhone className="item-icon" />
        <div className="item-content">
          <div className="item-title">
            <span>Call Toll Free:</span>{" "}
            <a href="tel:911127351345">+011 27351345</a>
          </div>
        </div>
      </Col>

      {/* Email */}
      <Col xs={12} md={4} className="single-item">
        <FaEnvelope className="item-icon" />
        <div className="item-content">
          <div className="item-title">
            <span>E-mail Us:</span>{" "}
            <a href="mailto:aaiifa6@gmail.com">aaiifa6@gmail.com</a>
          </div>
        </div>
      </Col>

      {/* Address */}
      <Col xs={12} md={4} className="single-item">
        <FaMapMarkerAlt className="item-icon" />
        <div className="item-content">
          <div className="item-title">
            Pearls Omaxe, Tower-I Netaji Subhash Place, Delhi
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>



      {/* Navbar */}
      <div className="menu-layout1">
        <Container fluid>
          <Row className="align-items-center justify-content-between px-3">
            <Col xs="6" lg="3">
              <a href="/" className="temp-logo d-inline-block">
                <img src="media/logo.jpg" alt="Logo" className="logo-img" />
              </a>
            </Col>

            {/* Desktop Nav */}
            <Col lg="7" className="d-none d-lg-block text-center">
              <nav className="template-main-menu">
                <ul className="nav-list">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <li key={link.name} className="nav-item">
                        <NavDropdown title={link.name} id={`dropdown-${link.name}`}>
                          {link.items.map((item) => (
                            <NavDropdown.Item
                              key={item.name}
                              href={item.href}
                              onClick={() => handleLinkClick(item.name)}
                            >
                              {item.name}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      </li>
                    ) : (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={activeLink === link.name ? "active" : ""}
                          onClick={() => handleLinkClick(link.name)}
                        >
                          {link.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </Col>

            {/* Actions */}
            <Col xs="6" lg="2" className="text-end">
              <div className="header-actions">
                <a href="join-us" className="btn-primary d-none d-lg-inline-block">
                  Join Us
                </a>
                <button
                  onClick={toggleMenu}
                  className="mobile-menu-toggle d-lg-none"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li key={link.name} className="mobile-dropdown">
                    <span className="dropdown-title">{link.name}</span>
                    <ul className="mobile-submenu">
                      {link.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            onClick={() => handleLinkClick(item.name)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}
              <li className="mobile-cta">
                <a href="join-us" className="btn-primary-mobile">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
