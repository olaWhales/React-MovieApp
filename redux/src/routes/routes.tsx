import { Children } from "react";
import Login from "../auth/Login"
import SignUp from "../auth/SignUp"
import Layout from "../layout/Layout";

const ROUTES = [
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/movie",
    element: <Layout/>,
    Children: [

    ],
  },
 
];

export default ROUTES;




