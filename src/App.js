import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Layout from "./components/shared/Layout";
import FileUpload from "./pages/FileUpload";
import Representatives from "./pages/Representatives";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
        index: true,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/fileupload",
        element: <FileUpload />,
      },
      {
        path: "/representatives",
        element: <Representatives />,
      },
      {
        path: "/analytics",
        element: <Products />,
      },
    ],
  },{
    path:"login",
    element:<div className="bg-red-100">Login</div>
  }
]);



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


