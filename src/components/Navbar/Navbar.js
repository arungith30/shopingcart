import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const [opened, setOpened] = useState(false);
  const openClick = () => {
    setOpened(!opened);
  };
  let shoplist = ["All Products", "Popular Items", "New Arrivals"]
  return (
    <nav className={clicked ? "navbar-mobile-open" : "navbar-mobile-close"}>

      <div className="logo">
        Start Bootstrap
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={"fas fa-bars"}></i>
      </div>
      <div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li>
            <NavLink exact to={"/"} activeClassName="active">
              {"Home"}
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/"} activeClassName="active">
              {"About"}
            </NavLink>
          </li>
          <li>
            <button className="button-shop" onClick={openClick}>
              Shop
              <i class="fa fa-caret-down"></i>
            </button>
          </li>

          <ul className={!opened ? "closelist" : " showlist"}>
            {shoplist.map((item) => {
              return (

                <li>{item}</li>
              )
            })}
          </ul>

          <div className="cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"> Cart 0</i>
          </div>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
