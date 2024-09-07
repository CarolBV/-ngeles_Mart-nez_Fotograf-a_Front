
import { createRoot } from 'react-dom/client'
import "../styles.scss"
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { AuthProvider } from './context/auth/authContext'



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
 
);
