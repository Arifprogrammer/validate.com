import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Default from "./Components/Default/Default";
import Providers from "./Providers/Providers";
import ShopParent from "./Components/ShopParent/ShopParent";
import Shop from "./Components/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Default />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: (
          <ShopParent>
            <Shop />
          </ShopParent>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
