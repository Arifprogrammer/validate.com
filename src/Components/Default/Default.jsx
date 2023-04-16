import React from "react";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div className="min-h-[calc(100vh-110px)] flex justify-center items-center flex-col gap-6">
      <h1 className="text-2xl font-semibold">
        If you're new to this website please{" "}
        <Link to="/register" className="underline text-blue-600">
          Register
        </Link>{" "}
        first.{" "}
      </h1>
      <h1 className="text-2xl font-semibold">
        If you've an existing account please{" "}
        <Link to="/login" className="underline text-blue-600">
          Login.
        </Link>
      </h1>
      <h1></h1>
    </div>
  );
};

export default Default;
