import React from "react";
import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="md:w-4/5 md:mx-auto my-3 md:my-2 nav-bg"
    >
      <Navbar.Brand
        href="https://flowbite.com/"
        className="order-2 md:order-1 mx-auto md:mx-0 -translate-x-4"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Validate.com
        </span>
      </Navbar.Brand>
      <div className="flex md:order-3">
        <Button className="hidden md:flex">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="order-3 md:order-2 bg-gray-500 md:bg-transparent text-size rounded-md text-slate-900 mt-1 pl-5 w-1/2 space-y-2 pb-4">
        <span className="text-xl font-serif font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "text-white "}
          >
            Home
          </NavLink>
        </span>
        <span className="text-xl font-serif font-semibold">
          <NavLink
            to="/register"
            className={({ isActive }) => isActive && "text-white"}
          >
            Register
          </NavLink>
        </span>
        <span className="text-xl font-serif font-semibold">
          <NavLink
            to="/login"
            className={({ isActive }) => isActive && "text-white"}
          >
            Login
          </NavLink>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
