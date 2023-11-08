import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Logo from "../assets/jazzy.svg";
import "../styles/navBar.css";
import CartContext from "../context/CartContext";

const NavBar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="sticky-top">
      <div className="navbar-content bg-success pt-3">
        <header className="container d-flex justify-content-between gap- align-items-center">
          <ul>
            <li className="list-unstyled">
              <Link to="/" className="text-decoration-none">
                <img src={Logo} alt="" className="logo" />
                <span className="text-warning fs-5 ">BurgerShop</span>
              </Link>
            </li>
          </ul>

          {/*nav links*/}
          <nav className="d-flex">
            <ul className="d-flex gap-3 list-unstyled justify-content-between align-items-center">
              <li>
                <p className="text-light pt-3 d-none d-lg-block">
                  ✨order now and get within{" "}
                  <span className="text-warning">15mint!</span>
                </p>
              </li>
              <li>
                <Link to={'/Cart'} className="text-decoration-none text-light fs-4">
                  <BsCart4 />
                  ({cart.length})
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-light fs-4">
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
