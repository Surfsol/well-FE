import React, { useState } from "react";
import { IoIosHome, IoIosKey, IoIosSettings, IoMdCreate } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Redirect, NavLink } from "react-router-dom";

const Menu = props => {
  //grab mvNav and change px size
  const openNav = () => {
    document.getElementById("myNav").style.width = "210px";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0px";
  };

  const logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  return (
    <>
      <div>
        <div className="hamburger-menu" onClick={openNav}>
          <span style={{ backgroundColor: "#082B84" }}></span>
        </div>
        <div id="myNav" className="overlay" onClick={closeNav}>
          <NavLink
            to="javascript:void(0)"
            className="closebtn"
            onClick={closeNav}
          ></NavLink>
          <div className="intro">
            <img
              className="logo"
              src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png"
              alt="logo"
            />
            <p className="name">Smarter Villages</p>
            <p className="email-address">WellDone@WellDone.org</p>
            <span className="span"></span>
            <div className="overlay-content-map">
              <div class="eachNav">
                <IoIosHome size={25} />
                <NavLink to="/dashboard">Home</NavLink>
              </div>
              <div className="eachNav">
                <IoMdCreate size={25} />
                <NavLink to="/overview">Overview</NavLink>
              </div>
              <div className="eachNav">
                <IoIosSettings size={25} />
                <NavLink to="/settings">Settings</NavLink>
              </div>
              <div className="eachNav">
                <FiLogOut size={25} />
                <NavLink onClick={logout} to="/">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
