import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from '../home/Home';
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
// import UpgradeToPro from "../components/UpgradeToPro";
import Documentation from "../components/Documentation";
import Help from "../components/Help";
// import Users from "../components/Users"; // Import Users page
import Overview from "../components/Overview"; // Import Overview page

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:3001/book/${params.id}`)
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><DashBoard/></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/editBooks/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:3001/books/${params.id}`)
      },
      {
        path: "/admin/dashboard/documentation",
        element: <Documentation />
      },
      {
        path: "/admin/dashboard/help",
        element: <Help />
      },
      {
        path: "/admin/dashboard/overview", // Add route for Overview page
        element: <Overview />
      }
    ]
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

export default router;
