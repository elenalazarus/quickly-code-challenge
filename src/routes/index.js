import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/Profile";
import Unauthorized from "../pages/Unauthorized";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

export default router;