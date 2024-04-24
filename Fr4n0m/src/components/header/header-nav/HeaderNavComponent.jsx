import React from "react";

const HeaderNav = () => {
  return (
    <>
      <ul>
        <a className="header-nav-link" href="">
          <li>
            <span className="top-key"></span>
            <span className="text">Work</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </li>
        </a>
        <a className="header-nav-link" href="/about-me">
          <li>
            <span className="top-key"></span>
            <span className="text">About</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </li>
        </a>
        <a className="header-nav-link" href="">
          <li>
            <span className="top-key"></span>
            <span className="text">Notes</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </li>
        </a>
        <a className="header-nav-link" href="">
          <li>
            <span className="top-key"></span>
            <span className="text">Contact</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </li>
        </a>
      </ul>
    </>
  );
};

export default HeaderNav;
