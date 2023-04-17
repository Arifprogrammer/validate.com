import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/Providers";

const Header = () => {
  const { user, handleSignout } = useContext(AuthContext);
  const handleSignoutBtn = () => {
    handleSignout()
      .then(() => {
        alert("signedout successfully");
      })
      .catch((error) => console.log(error));
  };
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
        <span className="self-center whitespace-nowrap text-2xl font-bold font-mono dark:text-white">
          Validate.com
        </span>
      </Navbar.Brand>
      <div className="flex md:order-3">
        <Button className="hidden md:flex">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="order-3 md:order-2 bg-gray-500 md:bg-transparent text-size rounded-md text-slate-900 mt-1 pl-5 w-1/2 space-y-2 pb-4 md:p-0">
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
            to="/shop"
            className={({ isActive }) => isActive && "text-white "}
          >
            Shop
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
        {user?.emailVerified && (
          <>
            {" "}
            <span className="text-xl">{user.email}</span>{" "}
            <Link
              to="/"
              className="bg-slate-800 py-1 px-4 rounded-md text-white"
              onClick={handleSignoutBtn}
            >
              Signout
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
