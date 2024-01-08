import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import MainBody from "./components/MainBody";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart"
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";







const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
     <Outlet/>
    </div>
  );
};



const appRouter=createBrowserRouter([{
  path: "/",
  element: <AppLayout/>,
  children:[
    {
      path:"/",
      element:<MainBody/>
    },
    {
      path: "/about",
      element: <AboutUs/>,
    },{
      path: "/contact",
      element: <ContactUs/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/resturants/:resId",
      element: <ResturantMenu/>,
    },
  ],
  errorElement: <Error/>
},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
