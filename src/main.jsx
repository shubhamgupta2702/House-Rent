import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Header from './Components/Header.jsx'
import Footer2 from './Components/Footer.jsx'
import Layout from './Layout.jsx'
// import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import { SimpleRegistrationForm } from './Components/SignUp.jsx'
import SignIn from './Components/SignIn.jsx'
import Example from './Components/Newsletter.jsx'
import ContactUs from './Components/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },{
        path: "signup",
        element: <SimpleRegistrationForm />
      },{
        path: "signin",
        element: <SignIn />
      },{
        path: "newsletter",
        element: <Example />
      },{
        path:"contactus",
        element: <ContactUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
