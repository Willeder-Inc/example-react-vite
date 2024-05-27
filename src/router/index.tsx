import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./root"
import { TestAtom, ProtectedRoute } from "atoms"
import { Contact, Home } from "pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  // INFO: add all the protected routes inside this
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "protected",
        element: <h1>Protected route</h1>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <div>
        Page Login
        <TestAtom />
      </div>
    ),
  },
])

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
