import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logo-trsp.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const Menu = () => {
    return (
      <>
        <div>
          <div className="gofood__navbar-container__myorders">
            <Link to="/myorders">
              <p>My Cart</p>
            </Link>
          </div>

          <div
            className="gofood__navbar-container__logout"
            onClick={handleLogout}
          >
            <p>Log Out</p>
          </div>
        </div>
      </>
    );
  };

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

        <div>
          {localStorage.getItem("authToken") ? (
            <Menu />
          ) : (
            <div>
              <div className="gofood__navbar-container__login">
                <Link to="/login">
                  <p>Log In</p>
                </Link>
              </div>
              <div className="gofood__navbar-container__signup">
                <Link to="/signup">
                  <p>Sign Up</p>
                </Link>
              </div>
            </div>
          )}
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
