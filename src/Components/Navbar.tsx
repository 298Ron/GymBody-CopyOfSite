import { FunctionComponent, useEffect, useState } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark "
      style={{
        minHeight: "10vh",
        fontSize: "1.3rem",
        position: "fixed",
        width: "100%",
        zIndex: "3",
        boxShadow: "0px -10px 30px 0px white",
      }}
    >
      <div className="container-fluid " style={{ width: "95%" }}>
        <a className="navbar-brand">
          <i
            className="fa-solid fa-dumbbell me-1"
            style={{
              transform: "rotate(-6deg)",
              fontSize: "16px",
            }}
          >
            <span
              className="ms-1"
              style={{
                color: "#deef0b",
              }}
            >
              GYM
            </span>
            <span
              style={{
                color: "white",
              }}
            >
              BODY
            </span>
          </i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link " href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#programs">
                Programs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trainers">
                Trainers
              </a>
            </li>
            <li className="nav-item contactUsA">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a
          className="contactBtn"
          style={{
            color: "black",
            backgroundColor: "#deef0b",
            borderRadius: "50px",
            fontSize: "1rem",
            paddingBlock: "10px",
            paddingInline: "25px",
            fontWeight: "bolder",
            cursor: "pointer",
            textDecoration: "none",
          }}
          href="#contact"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
