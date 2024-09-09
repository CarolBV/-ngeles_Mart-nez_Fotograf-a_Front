import { createBrowserRouter } from "react-router-dom"
import Gallery from "../pages/Gallery"
import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Layout from "../layout/Layout"
import LoginPage from "../pages/LoginPage"
import PrivateRoute from "./PrivateRoute"
import AdminPage from "../pages/AdminPage"
import ImageGallery from "../components/ImageGallery"

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
        path: "outside",
        element: <ImageGallery />,
    },
      {
      path: "aboutme",
        element: <AboutMe/>
      },
      {
        path: "contact",
          element: <Contact/>
        },
        {
          path: "login",
          element: <LoginPage />,
      },
      {
        path: "admin",
        element: <PrivateRoute element={<AdminPage />} />
      }
    ]
  }
]

)

export default router