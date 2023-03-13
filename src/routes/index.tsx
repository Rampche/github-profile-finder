import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import UserInfo from "../pages/UserInfo";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/user",
          element: <UserInfo />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ],
  {
    basename: "/github-profile-finder",
  }
);
