import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Home;
