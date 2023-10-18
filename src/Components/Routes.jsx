import { createBrowserRouter } from "react-router-dom";
import Signin from "../Containers/Signin/Signin";
import Home from "../Containers/Home/Home";
import QueryBuilder from "../Containers/QueryBuilder/QueryBuilder";
import Results from "../Containers/Results/Results";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/queryBuilder",
    element: <QueryBuilder />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);
