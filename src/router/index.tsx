import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../view/Login'
import Error404 from '../view/Error404'
import Error403 from '../view/Error403'
import Home from '../view/Home'

const router = [
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '*',
    element: <Navigate to={'/404'}></Navigate>,
  },
  {
    path: '/404',
    element: <Error404></Error404>,
  },
  {
    path: '/403',
    element: <Error403></Error403>,
  },
]

const Router = () => {
  return useRoutes(router)
}

export default Router

// export default createBrowserRouter(router)
