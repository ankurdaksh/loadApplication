import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import LoanReports from "./components/LoanReport"
import Login from "./components/Login"
import LoanApplication from "./components/LoanApplication";
import './App.css'
import Navbar from "./components/Navbar";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  const Layout = () => {
    return (
      <>
      <Navbar/>
     <Outlet />
     
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PrivateComponent><Dashboard /></PrivateComponent>,
        },
        {
          path: "/loanreport",
          element:<PrivateComponent><LoanReports /></PrivateComponent> ,
        },
        {
          path: "/loanapplication",
          element:<PrivateComponent> <LoanApplication /></PrivateComponent>,
        },
      
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
