import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Footer.css';

const Footer = () => (
  <>
    <div className="menu d-flex flex-row justify-content-around ">
      <div className="d-flex  flex-column justify-content-center align-items-center">
        <div>
          <NavLink
            exact
            to="/books"
            className="text-decoration-none
           text-white main-nav measure "
            activeClassName="main-nav--active"
          >
            <i className="  fa fa-bar-chart" />

          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            to="/books"
            className="text-decoration-none
           text-white "
          >
            <span className="menu_item_one">
              All
            </span>
            <span>
              Books
            </span>
          </NavLink>
        </div>
      </div>
      <div className="d-flex   flex-column justify-content-center align-items-center">
        <div>
          <NavLink
            exact
            to="/track-progress"
            className="text-decoration-none text-white
           main-nav book"
            activeClassName="main-nav--active"
          >
            <i className="fa fa-pie-chart" />
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            to="/track-progress"
            className="text-decoration-none
           text-white "
          >
            <span className="menu_item_one">
              Your
            </span>
            <span>
              progress
            </span>
          </NavLink>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center  ">
        <div>
          <NavLink
            exact
            to="/new-book"
            className="text-decoration-none text-white
           main-nav book"
            activeClassName="main-nav--active"
          >
            <i className="fa fa-book" />
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            to="/new-book"
            className="text-decoration-none text-white"
          >
            <span className="menu_item_three">
              New
            </span>
            <span>
              Book
            </span>
          </NavLink>
        </div>
      </div>
      <div className="  d-flex flex-column justify-content-center align-items-center">

        <NavLink
          exact
          to="/"
          className="text-decoration-none text-white"
        >
          <div className="menu_item_three">
            Dashboard
          </div>
        </NavLink>
      </div>
    </div>
  </>
);
export default Footer;
