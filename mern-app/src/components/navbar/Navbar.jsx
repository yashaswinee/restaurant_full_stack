import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logo-trsp.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </p>
      <p>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gofood__navbar section__padding">
      <div className="gofood__navbar-image">
        <Link to="/">
          <img src={Logo} alt="logo-img" />
        </Link>
      </div>

      <div className="gofood__navbar-container">
        <div className="gofood__navbar-container__home">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className="gofood__navbar-container__login">
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
        <div className="gofood__navbar-container__signup">
          <Link to="/signup">
            <p>SignUp</p>
          </Link>
        </div>
      </div>
      <div className="gofood__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gofood__navbar-menu__container scale-up-center">
            <div className="gofood__navbar-menu__container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
