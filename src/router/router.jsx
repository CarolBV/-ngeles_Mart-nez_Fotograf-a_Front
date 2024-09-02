import { createBrowserRouter } from "react-router-dom"
import Gallery from "../pages/Gallery"
import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Layout from "../layout/Layout"


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery/>
      },
      {
      path: "aboutme",
        element: <AboutMe/>
      },
      {
        path: "contact",
          element: <Contact/>
        }
    ]
  }
]

)

export default router