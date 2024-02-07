import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./component/landingPage/LandingPage";
import Dashboard from "./component/Dashboard/Dashboard";
import Register from "./component/Registration/Register";
import Home from "./component/landingPage/Home";
import SingleProductPage from "./component/landingPage/SingleProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "list",
        element: <h1>THis is the list</h1>,
      },

      {
        path: "todo",
        element: <App />,
      },
      {
        path: "product/:id",
        element: <SingleProductPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <h1>This is the dashboard</h1>,
      },
      {
        path: "users",
        element: <h1>This is the dashboard users</h1>,
      },
      {
        path: "settings",
        element: <h1>This is the dashboard settings</h1>,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
    children: [
      {
        index: true,
        element: <h1>This is the sign up page</h1>,
      },
      {
        path: "login",
        element: <h1>This is the login page</h1>,
      },
    ],
  },
]);
