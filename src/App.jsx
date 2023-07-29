import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Add from "./pages/add/Add"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import MyGigs from "./pages/myGigs/MyGigs"
import Orders from "./pages/orders/Orders"
import "./App.scss"

function App() {

  const Layout= ()=>{
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
