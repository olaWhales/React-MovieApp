import Login from "../auth/Login"
import SignUp from "../auth/SignUp"
import Layout from "../layout/Layout";
import Now_playing from "../component/Now_playing";
import Top_rated from "../component/Top_rated";
import UpcomingMovies from "../component/UpcomingMovie";
import PopularMovie from "../component/PopularMovie";

const ROUTES = [
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie",
    element: <Layout />,
    children: [
      {
        path: "/movie/popular",
        element: <PopularMovie/>,
      },
      {
        path: "/movie/now_playing",
        element: <Now_playing/>,
      },
      {
        path: "/movie/top_rated",
        element: <Top_rated />,
      },
      {
        path: "/movie/upcoming",
        element: <UpcomingMovies />,
      },
    ],
  },
];

export default ROUTES;




